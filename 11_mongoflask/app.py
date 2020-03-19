from flask import Flask, render_template, request, session, redirect, url_for
from utl import movies
import os
app = Flask(__name__) #create instance of class Flask
app.secret_key = os.urandom(32) #generates a secret key for session to start

@app.route("/", methods=["GET","POST"]) #assign following fxn to run when root route requested
def movie():
    return render_template('index.html')

@app.route("/year", methods=["POST"])
def year():
    if (session):
        startyear = session['start']
        endyear = session['end']
        movies = movies.moviesFromTo(startyear, endyear)
        return render_template('index.html', yearsmovie = movies)
    return redirect(url_for('movie'))
@app.route("/name", methods=["POST"])
def year():
    if (session):
        name = session['name']
        movies = movies.moviesThisPerformerIn(name)
        return render_template('index.html', namemovie = movies)
    return redirect(url_for('movie'))
@app.route("/genre", methods=["POST"])
def year():
    if (session):
        genre = session['genre']
        movies = movies.moviesInThisGenre(genre)
        return render_template('index.html', genremovie = movies)
    return redirect(url_for('movie'))
if __name__ == "__main__":
    app.debug = True
    app.run()
