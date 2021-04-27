
const dateFormat = (date) => { 
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const now = new Date(date);
	return months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear()
}

let originalDate = "2010-04-02T00:00:00+00:00"

console.log(dateFormat(originalDate));
