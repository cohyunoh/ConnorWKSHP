#Leia Park & Connor Oh
#SoftDev1 pd9
#K09 -- Yummy Mongo Py
#2020-02-28
from bson.json_util import loads
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['test']
collection = db.restaurants #creates a collection for the restaurants
#read in data============================
if(collection.count()==0):
    file = open("primer-dataset.json", "r")
    content = file.readlines()
    for line in content:
        collection.insert_one(loads(line))
# Specified borough
def getBorough(borough):
     data = collection.find({"borough": borough})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)


# Specified zip codefor item in data:
def getZipCode(zipcode):
     data = collection.find({"address.zipcode": zipcode})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

# Specified zip code & grade
def getZipGrade(zipcode, grade):
     data = collection.find({"address.zipcode": zipcode, "grades.0.grade": grade})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

# Specified zip code w/ score below a threshold
def getZipScore(zipcode, score):
     data = collection.find({"address.zipcode": zipcode, "grades.0.score": {"$lte": score}})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

# Something more clever
def getZipCuisine(zipcode, cuisine):
     data = collection.find({"address.zipcode": zipcode, "cuisine": cuisine})
     for item in data:
        for key, value in item.items():
            if key == "name":
                print("{name: %s}" % value)

#getBorough("Queens")
#getZipGrade("11357", "A")
#getZipCode("11357")
getZipScore("11357", 10)
getZipCuisine("11357", "Pizza")
