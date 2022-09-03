var getRow = function (rowIndex) {
    let result = [];
    let i = 0;
    let j = 0;
    for (i = 0; i <= rowIndex; i++) {
        result.unshift(1);
        for (j = 1; j < i; j++) {
            result[j] += result[j + 1];
        }
    }
    return result;
};
console.log(getRow(3))