var checkIfExist = function(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (i !== j) {
               if (arr[i] === 2 * arr[j])  return true;
            }
        }
    }
    return false;
};

console.log(checkIfExist([10,2,5,3]));