#Connor Oh
#SoftDev1 pd9
#K06 -- Divine your Destiny!
#2019-09-17

import csv

occupdict = {}

with open('occupations.csv') as occupations:
    reader = csv.reader(occupations, delimiter=',')
    line_count = 0
    for row in reader:
        if line_count > 0 and row[0] != 'total':
            occupdict[row[0]]:row[1]
            line_count += 1

print(occupdict)
