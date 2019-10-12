# Connor Oh & Manfred Team
# SoftDev1 pd09
# K18 -- No Trouble
# 2019-10-15
import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE = "Talos.db"
db = sqlite3.connect(DB_FILE) #opens existing file or it makes new one if it does not exit
c = db.cursor()               #facilitate db ops
c.execute("CREATE TABLE AVERAGES (id INTEGER, average FLOAT);")
command = "SELECT name, students.id, avg(mark) FROM students, courses WHERE students.id = courses.id GROUP BY name;"
c.execute(command)
rows = c.fetchall()
for row in rows:
    print(row)
    command = "INSERT INTO AVERAGES VALUES(" + row[1] + ", " + row[2] + ");"
    c.execute(command)

db.commit() #save changes
db.close()  #close database
