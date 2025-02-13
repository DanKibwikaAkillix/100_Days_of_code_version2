alphabet = 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'

question = int(input("Would you like to encrypt or decrypt a message? (1) or (0): "))
a = 0
b = 1
def encrypt(word, shift):
    empty_list = ""

    for i in word:
        # print(i)
        word = i.lower()
        shifted_index = alphabet.index(i) + shift
        empty_list += alphabet[shifted_index]

    print(f"{empty_list}")

def decrypt(word, shift):
    empty_list = ""

    for i in word:
        # print(i)
        word = i.lower()
        shifted_index = alphabet.index(i) - shift
        empty_list += alphabet[shifted_index]

    print(f"{empty_list}")




if question == b:
    # word_encrypt = input("Well okay, what\'s the word to encrypt? :....")
    # number_of_shift = int("to how many descimals do you want to shift?:....")
    encrypt("dan", 2)

elif question == a:
    # word_encrypt = input("Holla,  what\'s the word to decrypt? :....")
    # number_of_shift = int("to how many descimals do you want to shift back?:....")
    decrypt("fcp", 2)

else:
    print("You can enter either 1 ( encrypt) or 0 (decrypt)")