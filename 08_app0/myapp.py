#Connor Oh
#SoftDev1 pd9
#K08 -- Lemme Flask You Sump'n
#2019-09-19

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def hello_world():
    print(__name__) #where will this go?
    return "No hablo queso!"
@app.route("/") #assign following fxn to run when root route requested
def bye_world():
    print(__name__)
    return "Si hablo queso!"
@app.route("/") #assign following fxn to run when root route requested
def world():
    print(__name__)
    return "Cococococo"
if __name__ == "__main__":
    app.debug = True
    app.run()
