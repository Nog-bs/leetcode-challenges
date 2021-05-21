/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {

	for (let i = 0; i <= Math.pow(students.length, sandwiches.length); i++) {

		if (students[0] === sandwiches[0]) {
			students.shift();
			sandwiches.shift();
		}

		if (students[0] !== sandwiches[0]) {
			let firstStudent = students.shift();
			students.push(firstStudent);
			// console.log('students: ', students)
			// console.log('sandwiches: ', sandwiches)
		}

	}  

  	return students.length

};

let students = [1,1,0,0]
let sandwiches = [0,1,0,1]
// 0

console.log(countStudents(students,sandwiches))

/*

let students = [1,1,1,0,0,1]
let sandwiches = [1,0,0,0,1,1]
Input: students = [1,1,1,0,0,1]
sandwiches = 	  [1,0,0,0,1,1]

Output: 3

*/