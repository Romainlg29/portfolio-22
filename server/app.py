# Imports
from datetime import datetime, timedelta
from flask import Flask, request, redirect
#from flask_cors import CORS
import hashlib
import mariadb
from dotenv import load_dotenv
from Utils import connectToDatabase


# Starting
load_dotenv()

# Flask
app = Flask(__name__)
# CORS(app) DEV ONLY


@app.route("/api/", methods=['POST', 'GET'])
def status():
    if request.method == 'POST':
        return "Online"
    else:
        return redirect("https://romain-legall.fr")


@app.route("/api/analytics/overall", methods=['POST', 'GET'])
def overall_analytics():
    conn, db = connectToDatabase(mariadb)
    if request.method == 'POST':
        req = request.get_json()
        if req['lang'] == None or req['mobile'] == None:
            return ''

        hash = hashlib.sha256(request.remote_addr.encode('utf8')).hexdigest()

        db.execute(
            "SELECT COUNT(*) FROM unique_visits_logs WHERE user=?", (hash,))

        alreadyExists = False
        for c in db:
            alreadyExists = True if c[0] == 1 else False

        if alreadyExists:
            db.execute(
                "SELECT COUNT(*) FROM visits_logs WHERE user=? AND period < NOW() - INTERVAL 10 MINUTE", (hash, ))

            olderThan = False
            for d in db:
                olderThan = True if d[0] == 1 else False

            if olderThan:
                mobile = 1 if req['mobile'] == True else 0
                db.execute("INSERT INTO visits_logs (user, period, mobile) VALUES (?, ?, ?)",
                           (hash, datetime.now() + timedelta(hours=1), mobile))

                conn.commit()

        else:
            db.execute(
                "INSERT INTO unique_visits_logs (user, lang) VALUES (?, ?)", (hash, req['lang']))

            db.execute("INSERT INTO visits_logs (user, period) VALUES (?, ?)",
                       (hash, datetime.now() + timedelta(hours=1)))

            conn.commit()
        return ''
    else:
        return


@app.route("/api/analytics/post", methods=['POST'])
def posts_analytics():

    conn, db = connectToDatabase(mariadb)

    req = request.get_json()

    if req['post'] == None:
        return ''

    hash = hashlib.sha256(request.remote_addr.encode('utf8')).hexdigest()

    db.execute(
        "SELECT period FROM posts_logs WHERE user=? AND post=? ORDER BY id DESC LIMIT 1", (hash, req['post']))

    if db.rowcount == -1 or db.rowcount == 0:

        db.execute("INSERT INTO posts_logs (user, post, period) VALUES (?, ?, ?)",
                   (hash, req['post'], datetime.now() + timedelta(hours=1)))

        conn.commit()

        return ''

    else:

        period = datetime.now()

        for d in db:
            period = d[0]

        if (period + timedelta(minutes=10)) < datetime.now():

            db.execute("INSERT INTO posts_logs (user, post, period) VALUES (?, ?, ?)",
                       (hash, req['post'], datetime.now() + timedelta(hours=1)))

            conn.commit()

        return ''


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
