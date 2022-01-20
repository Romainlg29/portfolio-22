from flask import Flask, request, redirect
from flask_cors import CORS
import hashlib
import mariadb

app = Flask("Portfolio")
CORS(app)


@app.route("/", methods=['POST', 'GET'])
def status():
    if request.method == 'POST':
        return "Online"
    else:
        return redirect("https://romain-legall.fr")


@app.route("/analytics", methods=['POST', 'GET'])
def analytics():
    if request.method == 'POST':
        req = request.get_json()
        hash = hashlib.sha256(request.remote_addr.encode('utf8')).hexdigest()
        # db.insert(UserRecord(req['lang']))
        # db.commit()
        return ''
    else:
        #records = db.select(UserRecord)
        return  # list(records.retrieve(lang=))
