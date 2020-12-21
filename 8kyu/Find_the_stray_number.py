def stray(arr):
    arr.sort();
    
    if arr[0] == arr[2]:
        return arr[len(arr) -1]
    else:
        return arr[0]
    
