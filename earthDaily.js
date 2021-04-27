// ----------------- FIBONACCHI PROBLEM ----------------
const fibonacciFunction = (n) => {
	let result = [0, 1]
	for (let i = 0; i <= n - 3; i++) {
		if (n < 3) {
			return result[n - 1]
		} else {
			let newNumber = result[result.length - 1] + result[result.length - 2]
			result.push(newNumber)
		}
	}
	return result.pop()
}

console.log(fibonacciFunction(3))


/* 

mind 
addNumber = 0 0 1
i = 0 1 1 2

visual
[0, 1, 1, 2, 3]

return
8



*/

// // ---------------- IMMUTABLE FUNCTION ----------------


// const addList = (a, b, c) =>  {
// 	let addArray = a.concat(b)
// 	let deleteArray = addArray.filter(item => !c.includes(item))	
// 	let noDuplicates = [...new Set(deleteArray)] 
// 	return noDuplicates.sort((a,b) => b.length - a.length || b.localeCompare(a))
// }

// Original = ['one', 'two', 'three',];
// Add = ['one', 'two', 'five', 'six'];
// Delete = ['two', 'five'];
// console.log(addList(Original, Add, Delete))

// /*
// Original List = ['one', 'two', 'three',]
// Add List = ['one', 'two', 'five', 'six]
// Delete List = ['two', 'five']
// Result List = ['three', 'six', 'one'] 
// */