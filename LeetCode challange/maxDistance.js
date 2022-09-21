var maxDistance = function(nums1, nums2) {
    let maxDis = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + maxDis + 1; j < nums2.length; j++) {
      if (nums1[i] <= nums2[j]) {
        maxDis = j - i;
      } else {
        j = nums2.length;
      }
    }
  }
  return maxDis;
};

console.log(maxDistance([55,30,5,4,2], [100,20,10,10,5]));

//the expected output is 2