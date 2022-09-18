

with open("list.txt", "r", encoding="utf8") as file:
    file_list = (file.read().split(","))
    max_val = max(file_list)
    print(max_val)