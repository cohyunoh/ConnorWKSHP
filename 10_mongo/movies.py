#Team TobyTop40 Kiran & Connor
#SoftDev2 pd9
#K10 -- Import/Export Bank
#2020-03-04

import json
from pymongo import MongoClient

client = MongoClient()
db = client.tobytop40
movies = db.movies
if(movies.count()==0):
    with open('movies.json') as file:
        data = file.read() #convert file to str
        data = data[1:-1]
        for item in data:
            item = json.loads(item)
            movies.insert_one(item)
#print(movies)
#dislays all movies from a certain time range
def moviesFromTo(start, end):
    """prints all the movies from the years in the interval [start, end]"""
    data = movies.find({"year": {"$and": [{"$gte": start}, {"$lte": end}]}})
    for movie in data:
       for key, value in movie.items():
           if key == "title":
               print("{title: %s}" % value)

#displays all the movies a certain actor/actress was in
def moviesThisPerformerIn(name):
    """prints all the movies that includes the performer with [name] in its cast"""
    data = movies.find({"cast": {"$in": name}})
    for movie in data:
       for key, value in movie.items():
           if key == "title":
               print("{title: %s}" % value)

#displays all the movies with in this genre
def moviesInThisGenre(genre):
    """prints all the movies with [genre] in its list of genres"""
    data = movies.find({"genre": {"$in": genre}})
    for movie in data:
       for key, value in movie.items():
           if key == "title":
               print("{title: %s}" % value)

#moviesFromTo(2018,2019)
#moviesThisPerformerIn("Tom Cruise")
#moviesInThisGenre("Comedy")
