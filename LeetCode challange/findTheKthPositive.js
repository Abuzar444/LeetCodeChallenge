var findKthPositive = function(arr, k) {
    let left = 0
    let right = arr.length
    
    while(left < right) {
        const mid = Math.floor(left+(right-left)/2)
        
        if(arr[mid]-1-mid >= k) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return left + k 
};

console.log(findKthPositive([2,3,4,7,11], 5))

//the expected output is 9