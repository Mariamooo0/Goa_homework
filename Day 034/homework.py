#1 davaleba
def reverse_words(text):
    words = text.split(" ")
    reversed_words = [word[::-1] for word in words]
    return " ".join(reversed_words)

#2 davaleba

