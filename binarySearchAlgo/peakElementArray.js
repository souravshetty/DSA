let arr = [1, 2, 1, 3, 5, 6, 4];

function peakElement(arr) {
	let l = 0;
	let r = arr.length - 1;
	while (l < r) {
		let m = Math.floor((l + r) / 2);
		if (arr[m + 1] > arr[m]) {
			l = m + 1;
		} else {
			r = m;
		}
	}
	return l;
}
let a = peakElement(arr);
console.log(a);
//any peak element in an array
//it returns the index
//the between element shoudl be higher than its neighbour