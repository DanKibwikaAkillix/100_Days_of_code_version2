def is_leap_year(year):
    """
        defined on line 1 
    """  
    
    year_by_four = year % 4
    year_by_hundred =  year % 100
    year_by_four_hundred = year % 400

    return year_by_four == 0 and year_by_hundred == 0 and year_by_four_hundred == 0

year_value = int(input("Enter the year:...."))
print(is_leap_year(year_value))        