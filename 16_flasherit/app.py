#Team We Love John Homework - Manfred Tan and Connor Oh
#SoftDev1 pd9
#K15 - login
#2019-10-02

from flask import Flask, render_template, request, session, redirect, url_for
import os
app = Flask(__name__)
app.secret_key = os.urandom(32) #generates a secret key for session to start
# username: hello
# password: world

@app.route("/")
def checkCookies():
    if (session):
        if (session['username'] == "hello"):                # checks if user is logged in
            if (session['password'] == "world"):            #               ^
                return redirect(url_for("welcome"))         # if logged in redirects to welcome page
    #print('Cookies Not Found')
    return render_template(                                 # if not then render login page
        'login.html',
        message = "Hello user! Please enter your username and password:"
    )



@app.route("/login", methods=["POST"])
def login():
    #print(request.args) -> returns query string (GET method), which is empty because we use POST method
    #print(request.args["username"])
    #print(request.args["password"])
    #print(request.form) #returns values in forms with POST method
    #print(request.form["username"]) #prints value in username
    #print(request.form["password"]) #prints value in password
    session['username'] = request.form["username"]          # assign username key in session to inputted username
    session['password'] = request.form["password"]          # assign password key in session to inputted password
    if (session['username'] == "hello"):                    # checks if correct credentials
        if (session['password'] == "world"):
            return redirect(url_for("welcome"))             # redirects to welcome page
        else:
            return render_template(
                'login.html',                               # wrong password message
                message = "error: incorrect password")
    else:
        return render_template(
            'login.html',                                   # wrong username message
            message = "error: incorrect username")

    #return "received login information"


@app.route("/welcome")
def welcome():                                              # welcome page
    return render_template(
        "welcome.html"
    )

@app.route("/logout", methods=["POST"])
def logout():                                               # route logs out the user by getting rid of username and password in session
    session.pop('username')
    session.pop('password')
    return redirect(url_for("checkCookies"))                # redirect to beginning

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
