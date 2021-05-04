/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
	let filledArray = Array(s.length).fill(0);
	// 0 0 0 0 c o 0 0
	for (let i = 0; i <= filledArray.length - 1; i++) {
		filledArray[indices[i]] = s[i]
		// [0] filledArray[4] = c
		// [1] filledArray[5] = l
	}
	return filledArray.reduce((x,y) => x + y)
};

let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3];
    
console.log(restoreString(s, indices));

/*

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"

[
  'c', 'o', 'd',
  'e', 'l', 'e',
  'e', 't'
]

*/