var minCost = function(s, cost) {
    if (s.length == 1)
        return 0;
    
    let totalSum = 0, max = cost[0], subSum = cost[0];
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i-1]) {
            totalSum += subSum - max;
            subSum = 0;
            max = 0;
        }
        subSum += cost[i];
        max = Math.max(max, cost[i]);
    }
    
    return totalSum + subSum - max;
};

console.log(minCost("abaac", [1,2,3,4,5]))

//The expected output is 3