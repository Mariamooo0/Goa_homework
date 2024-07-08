#1 davaleba

def arithmetic_operations(a, b):
    sum_ab = a + b
    difference_ab = a - b
    product_ab = a * b
    quotient_ab = a / b if b != 0 else None  
    
    return sum_ab, difference_ab, product_ab, quotient_ab


a = 10
b = 3
results = arithmetic_operations(a, b)
print(f"ჯამი: {results[0]}, სხვაობა: {results[1]}, ნამრავლი: {results[2]}, კვოტიენტი: {results[3]}")

#2 davaleba

def add_until_limit(a, b, limit=100):
    while a + b <= limit:
        a += b
    return a


a = 30
b = 20
result = add_until_limit(a, b)
print(result)

#3 davaleba
def is_even_or_odd(number):
    if number % 2 == 0:
        return "ლუწი"
    else:
        return "კენტი"
    
#4 davaleba

def find_max_in_list(lst):
    if not lst:
        return None
    return max(lst)

numbers = [5, 10, 2, 8, 3]
result = find_max_in_list(numbers)
print(f"ლისტში უდიდესი რიცხვია: {result}")


#5 davaleba

def sum_of_list(lst):
    return sum(lst)

# მაგალითი:
numbers = [5, 10, 2, 8, 3]
result = sum_of_list(numbers)
print(f"ლისტში შემავალი რიცხვების ჯამია: {result}")

#6 davaleba

def concatenate_strings_and_integers(string_list, int_list):
    combined = []
    for s, i in zip(string_list, int_list):
        combined.append(s + str(i))
    return combined

strings = ['a', 'b', 'c']
integers = [1, 2, 3]
result = concatenate_strings_and_integers(strings, integers)
print(f"შებრუნებული სია: {result}")

#7 davaleba

def longest_and_shortest_strings(string_list):
    if not string_list:
        return None, None
    longest = max(string_list, key=len)
    shortest = min(string_list, key=len)
    return longest, shortest

strings = ['apple', 'banana', 'orange', 'kiwi', 'pear']
longest, shortest = longest_and_shortest_strings(strings)
print(f"ყველაზე გრძელი სტრინგი: {longest}, ყველაზე მოკლე: {shortest}")

#8 davaleba
def swap_case(string):
    return string.swapcase()


text = "Hello World"
result = swap_case(text)
print(f"შეცვლილი ტექსტი: {result}")


#9 davaleba
def count_digits_in_string(string):
    return sum(1 for char in string if char.isdigit())

# მაგალითი:
text = "Hello 12345"
result = count_digits_in_string(text)
print(f"სტრინგში ციფრების რაოდენობა: {result}")

#10 davaleba

def is_even(integer):
    return integer % 2 == 0
print(is_even(4))   
print(is_even(7))   
print(is_even(0))   
print(is_even(-2)) 
print(is_even(1))   

