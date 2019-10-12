# Connor Oh & Sophie Nichol & Derek Leung TEAM Upside Down Gnomes
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
command = "CREATE TABLE STUDENTS (name TEXT, age INTEGER, id INTEGER)"          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
with open('data/students.csv') as csvfile:      # open csv file
    studentreader = csv.DictReader(csvfile)     # reads it in as a dictionary where the key is the name of the column and the value is the value in the row
    #rownum = 0
    for row in studentreader:
        #name = row['name']
        #age = row['age']
        #id = row['id']
        command = "INSERT INTO STUDENTS VALUES(\"" + row['name'] + "\"" + ", " + row['age'] + ", " + row['id'] + ");" # insert data
        #print(rownum)
        #rownum += 1
        c.execute(command)
#==========================================================

#==========================================================
command = "CREATE TABLE COURSES (code TEXT, mark INTEGER, id INTEGER)"          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
with open('data/courses.csv') as csvfile:      # open csv file
    studentreader = csv.DictReader(csvfile)    # reads it in as a dictionary where the key is the name of the column and the value is the value in the row
    #rownum = 0
    for row in studentreader:
        #name = row['name']
        #age = row['age']
        #id = row['id']
        command = "INSERT INTO COURSES VALUES(\"" + row['code'] + "\"" + ", " + row['mark'] + ", " + row['id'] + ");"   # insert data
        #print(rownum)
        #rownum += 1
        c.execute(command)
#==========================================================

#==========================================================
q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id" # Command works in terminal to display the course, the student id associated with the id in course and the mark the student recieved
foo = c.execute(q)
print (foo)       # prints "<sqlite3.Cursor object at 0x7f0a0bf213b0>"
#==========================================================


db.commit() #save changes
db.close()  #close database
