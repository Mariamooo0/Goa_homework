# 1 davaleba

def digitize(n):
    return [int(digit) for digit in str(n)][::-1]
#2 davaleba
def are_you_playing_banjo(name):
    if name[0] in ['R', 'r']:
        return name + " plays banjo"
    return name + " does not play banjo"

#3 davaleba
def count_sheep(n):
    result = ""
    for i in range(1,n + 1):
        result += str(i) + "sheep..."
    return result

print(count_sheep(3))