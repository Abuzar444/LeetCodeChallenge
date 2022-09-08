var maxSubarraySumCircular = function (nums) {
    let [max, maxSum] = [-Infinity, -Infinity];
    let [min, minSum] = [Infinity, Infinity];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        sum += n;

        maxSum = Math.max(maxSum + n, n);
        minSum = Math.min(minSum + n, n);

        max = Math.max(max, maxSum);
        min = Math.min(min, minSum);
    }
    return max < 0 ? max : Math.max(max, sum - min);
};