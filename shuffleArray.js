/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
	let emptyArr = [];
	for (let i = 0; i <= nums.length / 2 - 1; i++) {
		emptyArr.push(nums[i])
		emptyArr.push(nums[nums.length / 2 + i])
	}
	return emptyArr
};

console.log(shuffle([2,5,1,3,4,7], 3))

/*

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

*/