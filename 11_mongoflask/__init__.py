from flask import Flask, render_template, request, session, redirect, url_for
from utl import movies
import os
from json import loads
from pymongo import MongoClient
from sys import argv

FILENAME = "utl/movies.json"


app = Flask(__name__) #create instance of class Flask
app.secret_key = os.urandom(32) #generates a secret key for session to start
DIR = os.path.dirname(__file__)
DIR += '/'

@app.route("/", methods=["GET","POST"]) #assign following fxn to run when root route requested
def movie():
    return render_template('index.html')

@app.route("/year", methods=["POST"])
def year():
    startyear = request.form['start']
    endyear = request.form['end']
    listmovies = movies.moviesFromTo(startyear, endyear)
    return render_template('index.html', yearsmovie = listmovies)
@app.route("/name", methods=["POST"])
def name():
    name = request.form['name']
    listmovies = movies.moviesThisPerformerIn(name)
    return render_template('index.html', namemovie = listmovies)
@app.route("/genre", methods=["POST"])
def genre():
    genre = request.form['genre']
    listmovies = movies.moviesInThisGenre(genre)
    return render_template('index.html', genremovie = listmovies)
if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')
