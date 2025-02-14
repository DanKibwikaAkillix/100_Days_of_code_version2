def f_name(user_f_name):
    first_name = user_f_name.title()
    return f"{first_name}"


def l_name(user_l_name):
    last_name = user_l_name.title()
    return f"{last_name}"


def d_o_b(date_birth):
    date_of_birth = date_birth.title()
    return f"{date_of_birth}"


first_name_out = f_name("DaN")
last_name_out = l_name("KIBWika")
dOb = f_name("18th July, 2001")


def user(f_n, l_n, dOb_in):
    user_name = f"{f_n} {l_n} {dOb_in}"
    return f"{user_name}"


print(user(first_name_out, last_name_out, dOb))
