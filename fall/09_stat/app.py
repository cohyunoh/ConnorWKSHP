from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'check the /static folder'

coll = [0,1,1,2,3,5,8]
@app.route('/my_foist_template')
def template():
    return render_template(
                'list.html',
                foo = "HELLO WORLD",
                collection = coll
                )

if __name__ == '__main__':
    app.debug = True
    app.run()
