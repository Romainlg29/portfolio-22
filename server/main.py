# Imports
from datetime import datetime, timedelta
from flask import Flask, request, redirect
from flask_cors import CORS
import hashlib
import mariadb
from dotenv import dotenv_values
from Utils import connectToDatabase


# Starting
env = dotenv_values('.env')

app = Flask("Portfolio")
CORS(app)

conn, db = connectToDatabase(mariadb, env)

# Flask


@app.route("/", methods=['POST', 'GET'])
def status():
    if request.method == 'POST':
        return "Online"
    else:
        return redirect("https://romain-legall.fr")


@app.route("/analytics/overall", methods=['POST', 'GET'])
def overall_analytics():
    if request.method == 'POST':
        req = request.get_json()
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
                           (hash, datetime.now(), mobile))

                conn.commit()

        else:
            db.execute(
                "INSERT INTO unique_visits_logs (user, lang) VALUES (?, ?)", (hash, req['lang']))

            db.execute("INSERT INTO visits_logs (user, period) VALUES (?, ?)",
                       (hash, datetime.now()))

            conn.commit()
        return ''
    else:
        return


@app.route("/analytics/post", methods=['POST', 'GET'])
def posts_analytics():

    req = request.get_json()
    hash = hashlib.sha256(request.remote_addr.encode('utf8')).hexdigest()

    db.execute(
        "SELECT period FROM posts_logs WHERE user=? AND post=? ORDER BY id DESC LIMIT 1", (hash, req['post']))

    if db.rowcount == -1 or db.rowcount == 0:

        db.execute("INSERT INTO posts_logs (user, post, period) VALUES (?, ?, ?)",
                   (hash, req['post'], datetime.now()))

        conn.commit()

        return ''

    else:

        period = datetime.now()

        for d in db:
            period = d[0]

        if (period + timedelta(minutes=10)) < datetime.now():

            db.execute("INSERT INTO posts_logs (user, post, period) VALUES (?, ?, ?)",
                   (hash, req['post'], datetime.now()))

            conn.commit()

        return ''
