#Nahi Khan, Connor Oh, Winston Peng [Team Beaker]

#SoftDev1 pd9

#K10 -- Jinja Tuning

#2019 - 09 - 23


from flask import Flask, render_template
import csv
import random

def genDict():
    occupdict = {}                                          #instantiate occupdict as a dictionary
    total = 0;                                              #this will increase to show what ranges represent which occupations
    with open('occupations.csv') as occupations:
        reader = csv.reader(occupations, delimiter=',')     #read in the file and break it up using ',' as the delimiter
        line_count = 0                                      #define the line count
        for row in reader:                                  #for each row do this
            if line_count > 0 and row[0] != 'Total':        #if the line is not the first or last line do this
                percentage = float(row[1])                  #convert the string percentage to a percentage
                occupdict[row[0]] = round(percentage + total,1)  #add the occupation as the key and the percentage as the value to the dictionary occupdict
                total += percentage                         #add the percentage to total
            line_count += 1                                 #increase line count

    return occupdict
dictionary = genDict()                                       #instantiate the dictionary

def sol():
    rand = random.randint(1,998) * 0.1                      #get a random integer from 0 toi 998 and then times it by 0.1 to make it a float that can be
                                                            #compared with the percentages
    for key in dictionary.keys():                           #for each of the keys in the dictionary
        if rand <= dictionary[key]:                         #if the random float generated is less than or equal to the percentage(value) attached to the job (key)
            return key;                                     #return the job(the key)
                                                            #if this is not true that means it doesnt fall within this zone and we continue with the others.
                                                            #    this is how we go through the zones. If it is greater than the value associated with job then it must be in a higher zone

##########################################################
app = Flask(__name__)                                       #instantiate Flask
heading = "Nahi Khan, Connor Oh, Winston Peng [Team Beaker]/nSoftDev1 pd9/nK10 -- Jinja Tuning/n2019 - 09 - 23" #our heading
@app.route("/occupyflaskst")                                #the route we will be using to access our table
def template():
    return render_template(
        'pizza.html',                                       #the html file in templates/
        foo = heading,                                      #will be used for heading
        title = "Wheel Of Occupations (Imagine There's A Wheel):",                     #the title of our program
        subheading0 = "Your Selection",                     #other title before randomly selected occupation
        subheading1 = "What You Missed Out On",             #other title before list of occupations
        job = sol(),                                        #randomly selected job
        occupations = dictionary                            #jobs
    )
app.debug = True
app.run()
