marks = {
    "Kibwika": 80,
    "Sanzila": 50,
    "Kazadi": 62,
    "Kasongo": 99,
    "Mwamba": 80,
    "Ilunga": 73,
    "Senga": 100,
    "Muloba": 84,
    "Philip": 87,
    "George": 44,
    "Annette": 21,
}

student_name = ""
highest_grade = 0

for value, highest_value in marks.items():
     if highest_value > highest_grade:
         highest_grade = highest_value
         student_name = value
print (f"{student_name} and {highest_grade}")