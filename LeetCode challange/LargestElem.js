var findKthLargest = function (nums, k) {
    let left = 0;
    let right = nums.length - 1;

    while (true) {
        let pos = position(nums, left, right);

        if (pos === k - 1) return nums[pos];
        else if (pos > k - 1) right = pos - 1;
        else left = pos + 1;
    }

    function position(nums, left, right) {
        let pivot = nums[left];
        let l = left + 1;
        let r = right;

        while (l <= r) {
            if (nums[l] < pivot && nums[r] > pivot) {
                swap(nums, l++, r--);
            }
            if (nums[l] >= pivot) l++;
            if (nums[r] <= pivot) r--;
        }
        swap(nums, left, r);
        return r;
    }

    function swap(nums, l, r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
    }
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4]))