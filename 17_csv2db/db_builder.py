# Connor Oh & Sophie Nichol
# SoftDev1 pd09
# K17 -- No Trouble
# 2019-10-10

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE = "Talos.db"
db = sqlite3.connect(DB_FILE) #opens existing file or it makes new one if it does not exit
c = db.cursor()               #facilitate db ops

#==========================================================




#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


command = "CREATE TABLE STUDENTS (name TEXT, age INTEGER, id INTEGER)"          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
with open('data/students.csv') as csvfile:
    studentreader = csv.DictReader(csvfile)
    for row in studentreader:
        name = row['name']
        age = int(row['age'])
        id = int(row['id'])
        command = "INSERT INTO STUDENTS VALUES({{name}}, {{age}}, {{id}})"
        c.execute(command)
#==========================================================

db.commit() #save changes
db.close()  #close database
