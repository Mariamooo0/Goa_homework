#1 davaleba

def hello():
    print("goa best")
hello()

#2 davaleba
def sum(a, b):
    result = a + b
    print("The sum of", a, "and", b, "is:", result)

sum(5, 7)  
sum(-3, 8) 
sum(0, 0)

#3 davaleba
def to_string(value):
    result = str(value)
    print( result)


to_string(42)      
to_string(3.14)   
to_string(True)   
to_string(None)    
to_string("Hello")

#4 davaleba
def print_type(value):
    value_type = type(value)
    print(f"The type of {value} is: {value_type}")

print_type(42)      
print_type(3.14)    
print_type(True)   
print_type(None)    
print_type("Hello")

#5 davaleba
def to_integer(value):
    int_value = int(value)
    print(f"The integer value of {value} is: {int_value}")

to_integer(42)     
to_integer(3.14)  
to_integer("100") 
to_integer("hello")
