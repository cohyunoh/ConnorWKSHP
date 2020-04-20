from flask import Flask, render_template
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def main():
    return render_template('home.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
