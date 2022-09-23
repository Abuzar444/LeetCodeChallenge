const pivotIndex = function(nums) {
	// left and right hold the sum of their respective sides.
    let left = 0, right = nums.reduce((a, b) => a + b), counter = 0;
    
    for(let i = 0; i < nums.length; i++){
		// remove the first element of the array
        const shift = nums.shift();
        i--;
		// subtract the element we removed from the array to the right sum
        right -= shift;
		// check if left and right side of pivot are equal
        if(left === right) return counter;
		// increment pivot counter
        counter++;
		// add the element we removed from the array to the left sum
        left += shift;
    };
    
	// if left sum never matches right sum return -1
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));