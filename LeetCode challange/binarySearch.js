var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid = 0;
    
    while(start <= end){
        mid = Math.floor((start + end)/2);
        if (nums[mid] === target){
            return mid
        } else if(nums[mid] < target) {
            start = mid +1;
        }else if (nums[mid] > target){
            end = mid - 1
        }
    }
    return -1;
    
};
console.log(search([1, 4, 5, 9]), 9);

//the expected output is 4 which is correct