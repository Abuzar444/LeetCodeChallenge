var checkInclusion = function(s1, s2) {
    let map={},mapSize=0
    for(let i=0;i<s1.length;i++){
        if(!map.hasOwnProperty(s1[i])){
            map[s1[i]]=1
            mapSize+=1
        }else{
            map[s1[i]]+=1
        }
    }
    let left=0
    for(let right=0;right<s2.length;right++){
        if(map.hasOwnProperty(s2[right])){
            map[s2[right]]-=1
            if(map[s2[right]]===0){
                mapSize-=1
            }
        }
        if(right>=s1.length-1){
            if(mapSize===0){
                return true
            }
            if(map.hasOwnProperty(s2[left]) && map[s2[left]]===0) mapSize+=1
            map[s2[left]]+=1
            left+=1
        }
    }
    return false
};

console.log(checkInclusion("ab","eidbaooo"));

//The expected output is true