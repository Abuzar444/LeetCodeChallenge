const searchInsert = (arr, target) => {
	if(arr.indexOf(target) === -1){
	for(let i = 0; i < arr.length; i++){
	  if(arr[i] < target){
	   return i;
	  }
	}
	return arr.length;
	}
	return arr.indexOf(target);
}

console.log([1, 2, 4, 5, 6], 4);

//if the target is 4 the output is 2
//if the target is 3 the output is also 2