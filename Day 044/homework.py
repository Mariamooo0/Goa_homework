def duplicate_count(text):
    text = text.lower()
    char_count = {}
    for char in text:
        if char.isalnum(): 
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1
    duplicate_count = 0
    for count in char_count.values():
        if count > 1:
            duplicate_count += 1
    
    return duplicate_count