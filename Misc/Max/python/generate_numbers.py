import random

with open("list.txt", "w", encoding="utf8") as file:
    file.write(",".join(["{:.10e}".format(random.randrange(10, 100) ** random.randrange(10, 100)) for i in range(1000)]))
