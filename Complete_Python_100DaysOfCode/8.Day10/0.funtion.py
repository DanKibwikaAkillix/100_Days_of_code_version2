# Title case

f_nameInput = input("Enter your first name:.... ")
l_nameInput = input("Enter your last name:..... ")

def format_name(f_name,l_name ):
    titleCase = f"{f_name} {l_name}"
    return f"{titleCase.title()}"

form_string = format_name(f_nameInput, l_nameInput)
print(form_string)