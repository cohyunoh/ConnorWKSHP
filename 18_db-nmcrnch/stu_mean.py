# Connor Oh & Manfred Team
# SoftDev1 pd09
# K18 -- No Trouble
# 2019-10-15
import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE = "Talos.db"
db = sqlite3.connect(DB_FILE) #opens existing file or it makes new one if it does not exit
c = db.cursor()               #facilitate db ops

command = "SELECT name, students.id, avg(mark)"
c.execute(command)
command = "FROM students, courses"
c.execute(command)
command = "WHERE students.id = courses.id"
c.execute(command)
command = "GROUP BY name"
c.execute(command)
command = ";"
c.execute(command)

db.commit() #save changes
db.close()  #close database
