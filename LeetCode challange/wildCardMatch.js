var traverse = (s, p, i, j, dp) => {
    if (i >= s.length) {
        while(j < p.length) {
            if (p[j++] != '*') return false;
        }
        return true;
    }
    
    if (j >= p.length) {
        return dp[i][j] = false;
    }
    
    if (dp[i][j] != null) return dp[i][j];
    
    if (s[i] == p[j] || p[j] == '?') return dp[i][j] = traverse(s, p, i + 1, j + 1, dp);
    else if (p[j] == '*') return dp[i][j] = traverse(s, p, i + 1, j, dp) || traverse(s, p, i, j + 1, dp);
    
    return dp[i][j] = false; 
}
var isMatch = function(s, p) {
    let dp = [...Array(s.length)].map(_=> Array(p.length).fill(null));
    
    return traverse(s, p, 0, 0, dp);
};
console.log(isMatch("aa", 'a'));