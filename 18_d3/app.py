from flask import Flask, render_template
import csv
app = Flask(__name__) #create instance of class Flask
def readin():
    dict = {}
    with open('static/csv/SAT.csv', 'r') as file:
        reader = csv.reader(file)
        list = ["STUYVESANT HIGH SCHOOL ", "BRONX HIGH SCHOOL OF SCIENCE ", "BROOKLYN TECHNICAL HIGH SCHOOL "]
        for row in reader:
            if (row[0] != 'DBN' and row[1] in list): #we do not want the first row
                dict[row[1]] = [int(row[2]), int(row[3]), int(row[4]), int(row[5])]
        #        school name, # of test takers, Critical Reading Mean,Mathematics Mean,Writing Mean
        print(dict)
    return dict

@app.route("/") #assign following fxn to run when root route requested
def main():
    csvfile = readin()
    schools = list(csvfile.keys()) #put all the school names into a list
    info = list(csvfile.values()) #put all the information into a list
    return render_template('home.html', info=info, names=schools)

if __name__ == "__main__":
    app.debug = False
    app.run()
