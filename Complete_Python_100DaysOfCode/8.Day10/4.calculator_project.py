def add(a, b):
    """Line 2, function adds value a by b"""
    return f"{a + b}"


def sub(a, b):
    """Line 7, function substrates value a by b"""
    return f"{a - b}"


def multiply(a, b):
    """Line 11, function multiplies value a by b"""
    return f"{a * b}"


def div(a, b):
    """Line 15, function divides value a by b"""
    return f"{a / b}"


def begin_calculation(aa, bb):
    option = input("What operation would you like to do?:....... +, - , * or /")

    if option == "+":
        print(f"{add(aa, bb)}")

    elif option == "-":
        print(f"{sub(aa, bb)}")

    elif option == "*":
        print(f"{multiply(aa, bb)}")

    elif option == "/":
        print(f"{div(aa, bb)}")
    else:
        print("Operation not supported")
        calculator()


def calculator():
    print("CALCULATOR APP")
    start = int(input("Turn calculator On[1] or Off[0]"))
    if start == 1:
        begin_calculation(4.0, 4.0)

        keep_going = input("Would you like to continue? yes[y] or no[n]")
        
    else:
        print("Exited")
        print("\n" * 100)
        print("\nWELCOME BACK")

        calculator()


calculator()
