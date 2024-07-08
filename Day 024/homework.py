def hero(bullets, dragons):
    return bullets >= dragons * 2




#2

def invert(lst):
    return [-x for x in lst]


#3
def difference_in_ages(ages):
    min_age = float('inf')  
    max_age = float('-inf')  
    
    for age in ages:
        if age < min_age:
            min_age = age
        if age > max_age:
            max_age = age
    
    return (min_age, max_age, max_age - min_age)


#4