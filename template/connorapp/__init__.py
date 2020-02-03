from flask import Flask
import os

os.path.dirname(__file__)

app = Flask(__name__) #create instance of class Flask

DIR = os.path.dirname(__file__) 
DIR += ‘/’


@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    print(__name__) #where will this go?
    return "No hablo queso!"

if __name__ == "__main__":
    app.debug = True
    app.run()
