/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
		let emptyArr = [];
		for (let i = 0; i <= nums1.length - 1; i++) {
			if (nums2.some(num => num === nums1[i])) {
				emptyArr.push(nums1[i])
			}
		}
		return [...new Set(emptyArr)]
};

let nums1 = [1,2,2,1]
let nums2 = [2,2]

console.log(intersection(nums1, nums2))


/*

nums1 = [1,2,2,1]
nums2 = [2,2]

*/