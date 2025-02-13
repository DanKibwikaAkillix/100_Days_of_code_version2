
# def bubbleSort(arr):
    
#     n = len(arr)

#     for i in range(n):
#         for j in range(0, n - i - 1):
            
#             if arr[j] > arr[j + 1]:
#                 arr[j], arr[j + 1] = arr[j + 1], arr[j]
                
# arr = [150, 142, 185, 120, 184, 129, 24, 59, 68, 199, 78, 65, 200,89, 86]

# bubbleSort(arr)

# print("Sorted array is:")
# for i in range(len(arr)):
#     print("%d" % arr[i])

# print(f"****************************\n {arr[i]}")

student_scores = [150, 142, 185, 120, 184, 129, 24, 59, 68, 199, 78, 65, 200,89, 86]

max_number = 0
for score in student_scores:
    if score > max_number:
        max_number = score

print(max_number)
