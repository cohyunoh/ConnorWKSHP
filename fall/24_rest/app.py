# Connor Oh & Derek Leung Team: Odd Number Of Stairs
# SoftDev1 PD 9
# K24 -- A RESTful Journey Skyward
# 2019-11-12

from flask import Flask, render_template, request, redirect, url_for
import urllib.request, json
app = Flask(__name__)

@app.route("/")
def hello_world():
    urllink = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=aSE5zbVk8IZbPt51EYgzq2itWhMyusUCKlu4KfQc")
    content = urllink.read()
    data = json.loads(content)
    print(data)
    return render_template("bruh.html",
                            description = data["explanation"],
                            picture = data["url"])

if __name__ == "__main__":
    app.debug = True
    app.run()
