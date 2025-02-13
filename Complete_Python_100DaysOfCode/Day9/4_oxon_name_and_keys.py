

play = "play"
bid = "bid"

candidates = {}


def startGame():
    game = input(
        "====================================\n Would you like to bid? YES[1] or NO[0]:........ \n========================================="
    )
    if int(game) == 1:
        Auction()
        gameN = input(
            "====================================\n Some body else? YES[1] or NO[0]:........ \n========================================="
        )
        if gameN == 1:
            Auction()
        elif gameN == 0:
            print("Game over")
            play == False
            startGame()
        else:
            continue_playing()

    elif int(game) == 0:
        continue_playing()

    else:
        print("incorrect syntax, try again")
        continue_playing()


def Auction():
    askName = input("What's your name?.......")
    askPrice = int(input("What' your offer?.....$."))
    candidates[askName] = askPrice

    print(candidates)


def continue_playing():

    pause = input(" Would you like to continue? [continue] or [exit]")
    if pause == "continue":
        print("let play")
        Auction()

    elif pause == "exit":
        _extracted_from_continue_playing_10()
    else:
        print("incorrect syntax, try again")


# TODO Rename this here and in `continue_playing`
def _extracted_from_continue_playing_10():
    print("\n" * 500)
    play == False



    highest_value = 0
    for bidder in candidates:
       bid_amount = candidates[bidder]
       if bid_amount > highest_value:
           highest_value = bid_amount
           winner = bidder
    print(f"The GAME IS OVER!!!!! so the winner is :.....{winner}...with a bid of.....{highest_value}...")
    startGame()


while play != "exit":
    startGame()
