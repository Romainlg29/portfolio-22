# Imports
from datetime import datetime, timedelta
from flask import Flask, request, redirect, Response, json
from flask_cors import CORS
import hashlib
import mariadb
from dotenv import load_dotenv
from Utils import connectToDatabase
import IP2Location


# Starting
load_dotenv()

# Flask
app = Flask(__name__)
CORS(app)  # DEV ONLY


@app.route("/api/", methods=['POST', 'GET'])
def status():
    if request.method == 'POST':
        return "Online"
    else:
        return redirect("https://romain-legall.fr")


@app.route("/api/analytics/overall", methods=['POST'])
def overall_analytics():

    # Connect to DB and get post data
    conn, db = connectToDatabase(mariadb)
    req = request.get_json()

    # Anonymise the user's ip (PROD)
    #hash = hashlib.sha256(
    #    request.environ['HTTP_X_FORWARDED_FOR'].encode('utf8')).hexdigest()

    # Anonymise the user's ip (DEV)
    hash = hashlib.sha256(request.environ['REMOTE_ADDR'].encode('utf8')).hexdigest()

    locations = IP2Location.IP2Location("./ips_blocks.bin")

    # Get the user's location (PROD)
    #location = locations.get_country_short(request.environ['HTTP_X_FORWARDED_FOR'])
    
    # Get the user's location (DEV)
    location = locations.get_country_short(request.environ['REMOTE_ADDR'])
    
    locations.close()

    print(f'User comes from {req["from"]}')

    # Check if this hash already exists
    db.execute(
        "SELECT COUNT(*) FROM unique_visits_logs WHERE user=?", (hash,))

    # Get the req result
    alreadyExists = False
    for c in db:
        alreadyExists = True if c[0] == 1 else False

    if alreadyExists:

        print("This user already exists!")

        # Get the id
        id = 0
        db.execute(
            "SELECT id FROM unique_visits_logs WHERE user=?", (hash,))

        for i in db:
            id = i[0]

        # Check if it's a refresh
        db.execute(
            "SELECT period FROM visits_logs WHERE user=? AND period > DATE_SUB(NOW(), INTERVAL 5 MINUTE);", (id, ))

        olderThan = True if db.rowcount == 0 else False

        print(
            f'The last log from {id} is {"older" if olderThan else "newer"} than 5 minutes!')

        if olderThan:
            mobile = 1 if req['mobile'] == True else 0

            # If not a refresh, it'll add this to the log
            db.execute("INSERT INTO visits_logs (user, period, mobile, referrer) VALUES (?, ?, ?, ?)",
                       (id, datetime.now() + timedelta(hours=1), mobile, req['from']))

            print(f'New log from {id} !')
            conn.commit()

    else:
        # Insert the new user
        db.execute(
            "INSERT INTO unique_visits_logs (user, lang, period) VALUES (?, ?, ?)", (hash, location if location else '', datetime.now() + timedelta(hours=1)))

        print(f'New log from a new user : {db.lastrowid}')

        db.execute("INSERT INTO visits_logs (user, period, referrer) VALUES (?, ?, ?)",
                   (db.lastrowid, datetime.now() + timedelta(hours=1), req['from']))

        conn.commit()

    print("Connection closed!")
    conn.close()
    return ''


@app.route("/api/analytics/post", methods=['POST'])
def posts_analytics():

    # Connect to DB and get post data
    conn, db = connectToDatabase(mariadb)
    req = request.get_json()

    # If no data from post, it'll return nothing
    if req['post'] == None:
        print("Connection closed!")
        conn.close()
        return ''

    # Anonymise the user's ip (PROD)
    #hash = hashlib.sha256(
    #    request.environ['HTTP_X_FORWARDED_FOR'].encode('utf8')).hexdigest()

    # Anonymise the user's ip (DEV)
    hash = hashlib.sha256(request.environ['REMOTE_ADDR'].encode('utf8')).hexdigest()

    # Check if this hash already exists
    id = 0
    db.execute(
        "SELECT id FROM unique_visits_logs WHERE user=?", (hash,))

    for i in db:
        id = i[0]

    # Check if the user already watched this post
    db.execute(
        "SELECT period FROM posts_logs WHERE user=? AND post=? ORDER BY id DESC LIMIT 1", (id, req['post']))

    if db.rowcount == -1 or db.rowcount == 0:

        db.execute("INSERT INTO posts_logs (user, post, period, referrer) VALUES (?, ?, ?, ?)",
                   (id, req['post'], datetime.now() + timedelta(hours=1), req['from']))

        print(f'New log from {id} !')
        conn.commit()
        conn.close()
        return ''

    else:

        period = datetime.now()

        for d in db:
            period = d[0]

        #  Check if it's a refresh
        if (period + timedelta(minutes=10)) < datetime.now():

            # If not, it'll insert logs
            db.execute("INSERT INTO posts_logs (user, post, period, referrer) VALUES (?, ?, ?, ?)",
                       (id, req['post'], datetime.now() + timedelta(hours=1), req['from']))

            print(f'New log from {id} !')
            conn.commit()

        print("Connection closed!")
        conn.close()
        return ''


@app.route("/api/post", methods=['POST'])
def post_comment():
    req = request.get_json()

    # If no data from post, it'll return nothing
    if req['post'] == None or req['comment'] == None:
        return Response(json.dumps({'result': False}), status=424, mimetype='application/json')

    # Not needed with React as JSX handle
    #comment = html.escape(req['comment'])
    comment = req['comment']

    # Connect to DB and get post data
    conn, db = connectToDatabase(mariadb)

    try:
        db.execute(
            "INSERT INTO posts_comments(post, comment, period) VALUES(?, ?, ?)", (req['post'], comment, datetime.now() + timedelta(hours=1)))

        conn.commit()
        conn.close()

    except:
        return Response(json.dumps({'result': False}), status=424, mimetype='application/json')

    return Response(json.dumps({'result': True}), status=200, mimetype='application/json')


@app.route("/api/post", methods=['GET'])
def get_comments():

    post = request.args.get('post', type=int)

    # If no data from post, it'll return nothing
    if post == None:
        return ''

    # Connect to DB and get post data
    conn, db = connectToDatabase(mariadb)

    # Our list of comments
    l = []

    try:
        db.execute(
            "SELECT id, comment, period FROM posts_comments WHERE post = ? ORDER BY period;", (post,))

        for e in db:
            l.append({'id': e[0], 'comment': e[1], 'period': e[2], 'responses': get_comment_responses(e[0])})

        conn.commit()
        conn.close()

    except BaseException:
        return ''

    return Response(json.dumps(l), status=200, mimetype='application/json')


@app.route("/api/comment", methods=['POST'])
def comment_response():
    
        req = request.get_json()
    
        # If no data from post, it'll return nothing
        if req['response'] == None or req['comment'] == None:
            return Response(json.dumps({'result': False}), status=424, mimetype='application/json')
    
        # Connect to DB and get post data
        conn, db = connectToDatabase(mariadb)
    
        try:
            db.execute(
                "INSERT INTO posts_comments_responses(comment, response, period) VALUES(?, ?, ?)", (req['comment'], req['response'], datetime.now() + timedelta(hours=1)))
    
            conn.commit()
            conn.close()
    
        except BaseException as ex:
            print(ex)
            return Response(json.dumps({'result': False}), status=424, mimetype='application/json')
    
        return Response(json.dumps({'result': True}), status=200, mimetype='application/json')


@app.route("/api/comment", methods=['GET'])
def get_comment_responses(i = None):

    comment = request.args.get('comment', type=int) or i

    # If no data from post, it'll return nothing
    if comment == None:
        return ''

    # Connect to DB and get post data
    conn, db = connectToDatabase(mariadb)

    # Our list of comments
    l = []

    try:
        db.execute(
            "SELECT id, response, period FROM posts_comments_responses WHERE comment = ? ORDER BY period;", (comment,))

        for e in db:
            l.append({'id': e[0], 'response': e[1], 'period': e[2]})

        conn.commit()
        conn.close()

    except BaseException:
        return ''

    return Response(json.dumps(l), status=200, mimetype='application/json') if i == None else l


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
