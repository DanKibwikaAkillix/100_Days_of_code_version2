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

def begin_calculation(aa, operation, bb):

    if operation == "+":
        return f"{saved_value["+"](aa,bb)}"

    elif operation == "-":
        return f"{saved_value["-"](aa, bb)}"

    elif operation == "*":
        return f"{saved_value["*"](aa, bb)}"

    elif operation == "/":
        return f"{saved_value["/"](aa,bb)}"


accumulate = True
num1 = float(input("enter the first number?:......."))
while accumulate:
    for symbols in saved_value:
        print(f"{symbols}")

    operator = str(input("What operation?:......."))
    num2 = float(input("enter the next number?:......."))

    answer = float((begin_calculation(num1, operator, num2)))

    print(answer)
    keep_cal = input(
        "Type [y] to continue the calculation, [n]  to start a new calculation:......."
    )

    if keep_cal == "y":
        num1 = answer

    else:
        print("\n" * 100)
        num1 = 0
        num1 = float(input("enter the first number?:......."))
