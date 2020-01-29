#Connor Oh
#SoftDev1 pd9
#K06 -- Divine your Destiny!
#2019-09-17

import csv
import random

##CREATE OCCUPATIONS DICTIONARY WITH PERCENTAGES AS VALUES:
def genDict(filename):
    occupdict = {}                                          #instantiate occupdict as a dictionary
    with open(filename) as occupations:
        reader = csv.reader(occupations, delimiter=',')     #read in the file and break it up using ',' as the delimiter
        line_count = 0                                      #define the line count
        for row in reader:                                  #for each row do this
            if line_count > 0 and row[0] != 'Total':        #if the line is not the first or last line do this
                occupdict[row[1]] = row[0]                  #add the occupation as the key and the percentage as the value to the dictionary occupdict
            line_count += 1                                 #increase line count
    return occupdict

#print(occupdict)



##CREATE ARRAY WITH 1000 ELEMENTS, OCCUPATION PROPORTIONAL TO PERCENTAGES
def genArray(occupdict):
    occuparray = []                                         #instantiate a list
    for key in occupdict.keys():                            #for all the keys in the dictionary do this
        for i in range(int(float(key) * 10)):               #for the next percentage * 10 slots append the key from the dict
            occuparray.append(occupdict[key])
    return occuparray                                       
#print(len(occuparray))                     

##CHOOSE INDEX OF ARRAY RANDOMLY
def chooseOccupation(occuparray):
    return occuparray[random.randint(0,len(occuparray))]    #get a random number between 0 and the length of the list (inclusive) and return the occupancy at that index

def main():
    occupdict = genDict('occupations.csv')                  #perform all the methods from before
    #print(occupdict)
    occuparray = genArray(occupdict)
    #print(occuparray)
    occ = chooseOccupation(occuparray)
    print(occ)
    return occ

main()



