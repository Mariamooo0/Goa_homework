def find_longest_increasing_subarray(arr):
    if not arr:
        return []

    max_length = 1
    current_length = 1
    start_index = 0
    max_start_index = 0

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            current_length += 1
        else:
            if current_length > max_length:
                max_length = current_length
                max_start_index = start_index
            current_length = 1
            start_index = i

    # ბოლო ზრდადი ნაწილსაც ვამოწმებთ
    if current_length > max_length:
        max_length = current_length
        max_start_index = start_index

    return arr[max_start_index:max_start_index + max_length]

# მაგალითები
print(find_longest_increasing_subarray([1, 2, 3, 1, 2, 3, 4]))  # [1, 2, 3, 4]
print(find_longest_increasing_subarray([1, 2, 1, 3, 16, 21, 11]))  # [1, 3, 16, 21]