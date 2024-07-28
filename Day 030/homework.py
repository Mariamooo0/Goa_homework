# 1 davaleba
def odd_index_sum(numbers):
    total = 0
    for i in range(len(numbers)):
        if i % 2 != 0:
            total += numbers[i]
    return total

print(odd_index_sum([1, 2, 3, 4, 5]))     
print(odd_index_sum([10, 15, 20, 25]))   
print(odd_index_sum([0, -1, 2, -3, 4, -5])) 
print(odd_index_sum([]))
