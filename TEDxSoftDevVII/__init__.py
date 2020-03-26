from flask import Flask, render_template, request, session, url_for, redirect
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def homepage():
    return render_template('home.html')

if __name__ == "__main__":
    app.debug = False
    app.run(host='0.0.0.0')
