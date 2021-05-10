/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
	let separateArr = n.toString().split('');
	let product = 1;
	let sum = 0;
	separateArr.forEach(item => {
		let number = parseInt(item);
		product = product * number;
		sum = sum + number;
	})
	return product - sum;
};

console.log(subtractProductAndSum(234))

/*

Input: n = 234
Output: 15 

*/