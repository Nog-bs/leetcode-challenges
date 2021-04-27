const largestAltitude = (gain) => {
	let largestAlt = 0
	let altitude = 0
	for (let i = 0; i <= gain.length - 1; i++) {
		altitude += gain[i]
		if (largestAlt < altitude) {
			largestAlt = altitude
		}
	}
	return largestAlt
};

console.log(largestAltitude([-5,1,5,0,-7]))

/* 

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0

*/