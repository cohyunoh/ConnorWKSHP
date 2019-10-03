#Team We Love John Homework - Manfred Tan and Connor Oh
#SoftDev1 pd9
#K15 - login
#2019-10-02

from flask import Flask, render_template, request, session, redirect, url_for
import os
app = Flask(__name__)

# username: hello
# password: world
app.secret_key = os.urandom(32)
@app.route("/")
def checkcookies():
    print(request.cookies.get('username'))
    if(session['user'] == "hello" && session['pass'] == "world"):
        #print('no cookies found: going to login page')
        return redirect(url_for("welcome"))
    else:
        print('Cookies Found')
        return render_template(
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
    session['user'] = request.form["username"]
    session['pass'] = request.form["password"]
    #print(request.cookies.get('user'))
    if (session['user'] == "hello"):
        if (session['pass'] == "world"):
            return redirect(url_for("welcome")) # redirects to welcome page
        else:
            return render_template(
                'login.html',
                message = "error: incorrect password")
    else:
        return render_template(
            'login.html',
            message = "error: incorrect username")

    #return "received login information"


@app.route("/welcome")
def welcome():
    return render_template(
        "welcome.html"
    )

if __name__ == "__main__":
    app.debug = True # Automatically updates project with save file
    app.run()
