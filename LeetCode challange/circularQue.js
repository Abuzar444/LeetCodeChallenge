const dfs = ( i , n , slate) => {
        //backtracking
        let lastQ = i - 1;
        
        for(let prevQ = 0 ; prevQ < lastQ ; prevQ++){
            //col conflict
            if(slate[prevQ] === slate[lastQ]) return;
            
            //diagonal conflict
            let rowDiff = Math.abs(prevQ - lastQ);
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ]);
            
            if(rowDiff === colDiff) return;
        }
        
        //base
        if(i === n){
            result.push(slate.slice())
            return;
        }
        
        
        //recurisve
        for(let col = 0 ; col < n ; col++){
            slate.push(col);
            dfs(i + 1 , n , slate);
            slate.pop()
        }
    dfs(0 , n , []);
    return result.length
};