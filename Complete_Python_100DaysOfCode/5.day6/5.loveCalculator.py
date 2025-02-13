nameInput1 = input("Enter the first name")
nameInput2 = input("Enter the second name")

name1_lower = nameInput1.lower()
name2_lower = nameInput2.lower()



def calculate_love_score(name1, name2):
    
    true_count, love_count = 0, 0
    for name in [name1, name2]:
        for letter in ["t","r","u","e"]:
            true_count += name.count(letter)
        for letter in ["l","o","v","e"]:    
            love_count += name.count(letter)

    total_count = int(str(true_count) + str(love_count))

    if total_count < 10 or total_count > 90:
        print(f"Your score is {total_count}, you go together like coke and mentos.")
    elif total_count >= 40 and total_count <= 50:
        print(f"Your score is {total_count}, you are alright together.")
    else:
        print(f"Your score is {total_count}.")


calculate_love_score(nameInput1, nameInput2 )
