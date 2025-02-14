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


saved_value = {
    "+": add,
    "-": sub,
    "/": div,
    "*": multiply,
}


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
