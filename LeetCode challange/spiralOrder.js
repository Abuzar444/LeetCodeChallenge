var spiralOrder = function(matrix) {
    let i = 0, j = 0, k = 0;
    let res = [];
    let dir = 1; //1 - rigth, 2 -down, 3 - left, 4 - up
    while(res.length < matrix.length * matrix[0].length) {
        res.push(matrix[i][j]);
        if(dir === 1 && j === matrix[0].length - 1 - k) dir++;
        if(dir === 2 && i === matrix.length - 1 - k) dir++;
        if(dir === 3 && j === 0 + k) { dir++; k++; }
        if(dir === 4 && i === 0 + k) dir = 1; 
        if(dir === 1) j++;
        if(dir === 2) i++;
        if(dir === 3) j--;
        if(dir === 4) i--;       
    }
    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

//The expected output should be [1,2,3,6,9,8,7,4,5]