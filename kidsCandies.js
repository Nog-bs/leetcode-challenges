/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
	let emptyArr = [];
	let maxCandy = Math.max(...candies);
	for (let i = 0; i <= candies.length - 1; i++) {
		if ((candies[i] + extraCandies) >= maxCandy) {
			emptyArr.push(true)
		}
		if ((candies[i] + extraCandies) < maxCandy) {
			emptyArr.push(false)
		}
	}
	return emptyArr
};

console.log(kidsWithCandies([2,3,5,1,3], 3))

/*

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 

*/
