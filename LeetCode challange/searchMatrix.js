var searchMatrix = function(matrix, target) {
    let colSize = matrix[0].length - 1, i = 0;
    while( i < matrix.length) {
        if(matrix[i][colSize] == target) return true;
        else if(matrix[i][colSize] < target) i++;
        else return findNum(matrix[i], target);
    }
    return false;  
};

var findNum = function(nums, target) {
    let [low, mid, high] = [0, 0, nums.length - 1];
    while (low <= high) {
        mid = low + ((high - low) % 2);
        if (nums[mid] == target) return true;
        else if (nums[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
//Our output should be true