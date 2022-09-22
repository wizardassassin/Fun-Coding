val = int(input("What is 1 + 1: "))
if val == 2:
    print("Correct")
else:
    print("False")
    
import tensorflow as tf
import numpy as np


print(tf.config.list_physical_devices('GPU'))