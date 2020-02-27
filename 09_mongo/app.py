from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['test']
collection = db['restaurants']

# Specified borough
def getBorough(borough):
     data = collection.find({"borough": borough})
     for item in data:
          return item

# Specified zip code
def getZipCode(zipcode):
     data = collection.find({"address.zipcode": zipcode})
     for item in data:
          return item

# Specified zip code & grade
def getZipGrade(zipcode, grade):
     data = collection.find({"address.zipcode": zipcode, "grades.0.grade": grade})
     for item in data:
          return item

# Specified zip code w/ score below a threshold
def getZipScore(zipcode, score):
     data = collection.find({"address.zipcode": zipcode, "grades.0.grade": {"$lt": score}})
     for item in data:
          return item

# Something more clever
def getCuisine(cuisine):
     data = collection.find({"cuisine": cuisine})
     for item in data:
          return item

print(getBorough("Queens"))
