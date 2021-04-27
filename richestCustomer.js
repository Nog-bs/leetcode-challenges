/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
	let emptyArr = []
	for (let i = 0; i <= accounts.length - 1; i++) {
		let accountTotal = accounts[i].reduce((x,y) => x + y)
		emptyArr.push(accountTotal)
	}
	return Math.max(...emptyArr)
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))

/*

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

*/