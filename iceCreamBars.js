/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
	let sortCosts = costs.sort((x,y) => x - y);
	let emptyArr = []
	for (let i = 0; i <= sortCosts.length - 1; i++) {

		let reduceArray = emptyArr.reduce((x,y) => x + y, 0)


		if (reduceArray === coins || sortCosts[i] > coins) {
			return emptyArr.length
		}

		if (reduceArray + sortCosts[i] > coins) {
			return emptyArr.length
		}

		emptyArr.push(sortCosts[i])

	}

	return emptyArr.length

};

console.log(maxIceCream([1,3,2,4,1], 7))

// NOTES: could have created a counter instead of using .reduce (current solution runs too slow)


/*

costs: [1,3,2,4,1]
coins: 7
Output: 4

costs: [10,6,8,7,7,8]
coins: 5
Output: 4

*/