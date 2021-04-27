const runningSum = (nums) => {
	let emptyArr = []
	nums.forEach((item,index) => {
		let counter = 0
		for (let i = 0; i <= index; i++) {
			counter += nums[i]
			if (i === index) {
				emptyArr.push(counter)
			}
		}
	})
	return emptyArr
};

console.log(runningSum([3,1,2,10,1]))

/*

Input: nums = [1,2,3,4]
Output: [1,3,6,10]

*/