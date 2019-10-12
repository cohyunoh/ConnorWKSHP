# Connor Oh & Manfred Team CTs
# SoftDev1 pd09
# K18 -- No Trouble
# 2019-10-15
import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE = "Talos.db"
db = sqlite3.connect(DB_FILE) #opens existing file or it makes new one if it does not exit
c = db.cursor()               #facilitate db ops
c.execute("CREATE TABLE AVERAGES (id INTEGER, average FLOAT);") # Create a data table for the averages
command = "SELECT name, students.id, avg(mark) FROM students, courses WHERE students.id = courses.id GROUP BY students.id;"
# ^ This command SELECTS name of the student, the id, and the average of all the marks from courses grouped under the same id
c.execute(command)
rows = c.fetchall() # fetches the data from the previous execute command and puts it into a list of lists
for row in rows:
    print(row)
    command = "INSERT INTO AVERAGES VALUES(" + str(row[1]) + ", " + str(row[2]) + ");" # inserts the data into AVERAGES data table
    c.execute(command)

db.commit() #save changes
db.close()  #close database
