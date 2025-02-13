

def life_in_weeks(age):
    week = 52 #totl weeks in a month according to https://www.google.com/search?q=how+many+weeks+do+we+have+in+a+year&oq=how+many+weeks++do+we+have+in+a+&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIICAcQABgWGB4yDQgIEAAYhgMYgAQYigUyDQgJEAAYhgMYgAQYigXSAQkxMzEwMGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8
    totalAge = 90 
    totalWeek = week * totalAge
    myWeek = week * age
    weekLeft = (totalWeek -myWeek)
    print(f"you have {weekLeft} weeks left")

ageInput= int(input("Enter your totalAge: "))
life_in_weeks(ageInput)