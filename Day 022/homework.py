#1 davaleba

def add_five(number):
    return number + 5

# მაგალითები:
print(add_five(10))  # 15
print(add_five(-3))  # 2

#2 davaleba

def multiply(a, b):
    return a * b

print(multiply(3, 4))   
print(multiply(-2, 5))

#3 davaleba
def string_length(s):
    return len(s)


print(string_length("Hello"))  # 5
print(string_length("Python is fun"))  # 13

#4 davaleba
def lengths_of_strings(string_list):
    lengths = [len(s) for s in string_list]
    return lengths


words = ["apple", "banana", "cherry"]
print(lengths_of_strings(words))

#5davaleba

def is_palindrome(s):
    return s == s[::-1]


print(is_palindrome("wow"))      
print(is_palindrome("hello"))     
print(is_palindrome("madam"))     
print(is_palindrome("racecar"))   

#6davaleba
def find_longest_string(string_list):
    longest = max(string_list, key=len)
    return longest

# მაგალითი:
words = ["apple", "banana", "cherry"]
print(find_longest_string(words))

#7 davaleba
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))   # 120
print(factorial(0))   # 1
print(factorial(1))   # 1

#8 davaleba
def sum_of_max_numbers(list1, list2):
    max1 = max(list1)
    max2 = max(list2)
    return max1 + max2


list1 = [1, 5, 3, 9]
list2 = [7, 2, 4, 8]
print(sum_of_max_numbers(list1, list2))

#9 davaleba
def difference_of_min_numbers(list1, list2):
    min1 = min(list1)
    min2 = min(list2)
    return abs(min1 - min2)


list1 = [1, 5, 3, 9]
list2 = [7, 2, 4, 8]
print(difference_of_min_numbers(list1, list2))

#10 davaleba
def find_difference(numbers):
    if not numbers:
        return 0
    
    max_num = max(numbers)
    min_num = min(numbers)
    
    difference = max_num - min_num
    
    return difference


numbers = [5, 10, 2, 8, 3]
result = find_difference(numbers)
print(f"მაქსიმალური და მინიმალური რიცხვების სხვაობა: {result}")