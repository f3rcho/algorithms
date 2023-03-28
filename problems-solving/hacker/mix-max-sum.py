def miniMaxSum(arr):
    # Write your code here
    arr.sort()
    l=len(arr)
    minimum = sum(arr[:4])
    maximum = sum(arr[1])
    print(minimum, maximum, sep=" ")
