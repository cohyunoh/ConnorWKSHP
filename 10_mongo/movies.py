#Team TobyTop40 Kiran & Connor
#SoftDev2 pd9
#K10 -- Import/Export Bank
#2020-03-04

from bson.json_util import loads
from pymongo import MongoClient

#dislays all movies from a certain time range
def moviesFromTo(start, end):
    data = movies.find("year" : {"$and" : [{"$gte" : start}, {"$lte" : end}]})
    for movie in data:
       for key, value in movie.items():
           if key == "title":
               print("{title: %s}" % value)

def moviesThisPerformerIn(name):
    data = movies.find("cast" : {"$in": name})
    for movie in data:
       for key, value in movie.items():
           if key == "title":
               print("{title: %s}" % value)
