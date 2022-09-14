const findSqr = (num) => {
	let sqr = 0;
	let sub = 1;
	while(num > 0){
		sqr += 1;
		if(sqr === 0){
			num--;
			sub += 2;
			continue;
		}
		sub += 2;
		num -= sub;
	}
	return sqr;
}
console.log(findSqr(4));

//The expected output is 2
//If the number is 16 then the output should be 4