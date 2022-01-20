# Imports
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

db = connectToDatabase(mariadb, env)

# Flask
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
        print(hash)
        db.execute("SHOW DATABASES;")
        for d in db:
            print(d)
        return ''
    else:
        return
