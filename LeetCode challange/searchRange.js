var searchRange = function(nums, target) {
    let result = [];
    result[0] = findFirstOccur(nums , target);
    result[1] = findLastOccur(nums, target);
    return result;
};

const findFirstOccur = (nums , target) => {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        
        if(nums[mid] === target) index = mid;
        
        if(nums[mid] >= target){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return index;
    
}

const findLastOccur = (nums , target) => {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        
        if(nums[mid] === target) index = mid;
        
         if(nums[mid] <= target){
             start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return index;
}

console.log(searchRange([5,7,7,8,8,10], 8));
//the expected output should be [3, 4]