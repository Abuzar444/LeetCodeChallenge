var intersect = function(nums1, nums2) {
    let sol = [];
  for (let i = 0; i < nums2.length; i++) {
    let index = nums1.indexOf(nums2[i]);
    if (index >= 0) {
      sol.push(nums2[i]);
      nums1.splice(index, 1);
    }
  }
  return sol.sort();
};

console.log(intersect([1,2,2,1], [2, 2]));
//The output should be [2, 2]