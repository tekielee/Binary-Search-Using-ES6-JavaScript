function binarySearch(array, needle, low, high) {
	if(high < low) {
		return false;
	}
	let mid = parseInt((low + high)/2);
	if(array[mid] > needle) {
		return binarySearch(array, needle, low, mid - 1);
	} else if (array[mid] < needle){
		return binarySearch(array, needle, mid + 1, high);
	} else {
		return true;
	}
}

let numbers = [10, 20, 31, 65];
let num = 31;
if(binarySearch(numbers, num, 0, numbers.length) !== false) {
	console.log('Found number: ' + num);
} else {
	console.log('Not Found number: ' + num);
}

let num2 = 32;
if(binarySearch(numbers, num2, 0, numbers.length) !== false) {
	console.log('Found number: ' + num2);
} else {
	console.log('Not Found number: ' + num2);
}