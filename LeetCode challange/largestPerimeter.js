var largestPerimeter = function(A) {
    const sortedA = A.sort((a, b) => b - a);
    let perimeter = 0;
    
    for (let i = 0; i < sortedA.length; i++) {
        if (i + 2 >= sortedA.length || perimeter) break;
        if (sortedA[i] >= sortedA[i + 1] + sortedA[i + 2]) continue;
        
        if (sortedA[i] && sortedA[i + 1] && sortedA[i + 2]) {
            perimeter = sortedA[i] + sortedA[i + 1] + sortedA[i + 2];
        }
    }