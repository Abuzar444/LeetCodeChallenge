function minimumTotal(triangle) {
    for (let i = 1; i < triangle.length; ++i) {
        for (let j = 0; j < triangle[i].length; ++j) {
            triangle[i][j] += Math.min(
                triangle[i - 1][j - 1] ?? Infinity,
                triangle[i - 1][j] ?? Infinity
            );
        }
    }
    return triangle.at(-1).reduce((acc, val) => Math.min(acc, val), Infinity);
}

console.log(minimumTotal[[[2],[3,4],[6,5,7],[4,1,8,3]]])