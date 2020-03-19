#Connor Oh & Benjamin Avrahami -- TEAM Socks
#SoftDev2 -- pd9
#K11 -- Ay Mon Go Git It From Yer Flask
#2020-03-19
from flask import Flask, render_template, request, session, redirect, url_for
from utl import movies
import os
import pymongo, json
from bson.json_util import loads

client = pymongo.MongoClient('localhost', 27017) # port 27017
db = client['Socks']
films = db['movies']

if films.count() == 0:
    with open('utl/movies.json','r') as jsonfile:
        data = jsonfile.read()
        content = loads(data)
        films.insert(content)

app = Flask(__name__) #create instance of class Flask
app.secret_key = os.urandom(32) #generates a secret key for session to start

@app.route("/", methods=["GET","POST"]) #assign following fxn to run when root route requested
def movie():
    return render_template('index.html')

@app.route("/year", methods=["POST"])
def year():
    startyear = request.form['start']
    endyear = request.form['end']
    listmovies = movies.moviesFromTo(int(startyear), int(endyear));
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
