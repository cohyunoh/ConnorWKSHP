from flask import Flask
from utl import movies
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def showmovie():
    return "No hablo queso!"

if __name__ == "__main__":
    app.debug = True
    app.run()
