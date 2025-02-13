import random

icon =[ "✊","🤚", "✌️" ]
move =[ "1","2", "3" ]

computer_move = int(random.choice(move))
#or computer_move = int(random.randint(move))
userMove = int(input("Rock , Paper , Scissors?: 1, 2 or 3 :..."))


for n in range(len(move)):
    move[n] = int(move[n])

# Rock(1) Paper(2) Scisors(3)

# user = rock(1) and computer paper(2) : COMPUTER Wins 
if userMove == 1 and computer_move == 2:
    print (f"Computer won \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")
# user = paper(2) and computer scissor(3) = computer Wins 
elif userMove == 2 and computer_move == 3:
    print (f"Computer won \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")
# user = scissor(3) and computer(1) = rock : computer wins 
elif userMove == 3 and computer_move == 1:
    print (f"Computer won \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")


# computer = rock(1) and user = paper(2) : User Wins 
elif computer_move == 1 and userMove == 2:
    print (f"You win \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")
# computer = paper(2) and user = scissor(3):  user wins 
elif computer_move == 2 and userMove == 3:
    print (f"You won \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")
# computer = scissor(3) and user rock(1) : USER wins 
elif computer_move == 3 and userMove == 1:
    print (f"You won \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")

elif computer_move == userMove :
    print (f"That's a drow!!! PLay again :) \n User: {icon[userMove-1]} \n Computer{icon[computer_move-1]}")

else:
    print("Oops try again!")


