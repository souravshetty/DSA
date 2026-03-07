function findMin(a) {
	let l = 0;
	let r = a.length - 1;
	let m = l + Math.floor((r - l) / 2);

	//sorted case
	// if(a[l]<=a[r]){
	//     return a[l];
	// }
	// in sorted array the middle element is always greater if not thts the inflection point
	while (l <= r) {
		// no check for sorted for every reduced sample space
		if (a[l] <= a[r]) {
			return a[l];
		}

		if (a[m] < a[m - 1]) {
			return a[m];
		}
		//if lesft half side is unsorted
		if (a[l] > a[m]) {
			r = m - 1;
		} else {
			l = m + 1;
		}
	}
}
let arr = [4, 5, 6, 7, 0, 1, 2];

// RUN FUNCTION
console.log("Minimum element:", findMin(arr));
