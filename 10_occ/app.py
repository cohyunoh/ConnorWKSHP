#Nahi Khan, Connor Oh, Winston Peng [Team Beaker]

#SoftDev1 pd9

#K10 -- Jinja Tuning

#2019 - 09 - 23


from flask import Flask, render_template
import csv
import random

file = open("occupations.csv","r")                          #open file with reading capabilities
readfile = file.readlines()                                 #read each line and put them as a list of strings
file = readfile.pop(0)                                      #pop off first line
dictionary = {}                                             #instantiate the dictionary
def sol():

    total = 0;                                              #this will increase to show what ranges represent which occupations
                                                            #   - to do the percentages we basically make zones with each occupation taking up a percentage of 99.8
                                                            #   - so if the first percentage is 5.6 then for it to be selected, it needs to fall within 0 to 5.6
                                                            #   - we then add 5.6 to total so for the next occupation, let's say it has a percentage of 6.1,
                                                            #     we add 6.1 to the total to get the max number and now for this occupation, the range will be
                                                            #     from 5.6 to 11.7
    for line in file:                                       #for every line in file
        idx = line.rfind(",")                               #find the index of the comma in each line
        job = line[0:idx]                                   #assign the job var to the first part of the line which is a string (0 to index of comma excludes the comma)
        percent = float(line[idx+1:-1])                     #assign the percent var to the second part of the list and makes it a float
        dictionary[job] = round(percent + total,1);         #add the dictionary the occupation as the key and the sum of the total and percentage rounded to the ones decimal
                                                            #   place
        total += percent                                    #add the percentage to total
    del dictionary["Total"]                                 #delete the last key since it is not needed and only shows the total
    rand = random.randint(1,998) * 0.1                      #get a random integer from 0 toi 998 and then times it by 0.1 to make it a float that can be compared with the
                                                            #   percentages
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
