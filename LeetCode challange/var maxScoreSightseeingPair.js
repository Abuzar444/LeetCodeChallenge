var maxScoreSightseeingPair = function (values) {
  let n = values.length;
  let max = 0;

  for (let i = 0, j = 1; j < n; j++) {
    let score = values[i] + values[j] + i - j;
    max = Math.max(max, score);
    if (values[i] + i <= values[j] + j) i = j;
  }
  return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]))