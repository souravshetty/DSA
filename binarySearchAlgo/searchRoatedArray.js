let arr = [6, 7, 8, 9, 0, 1, 2, 3, 4];
let target = 0;
let l = 0;
let r = arr.length - 1;
while (l <= r) {
	let m = l + Math.floor((r - l) / 2);
	if (target === arr[m]) {
		console.log(m);
	}
	// left side sorted//
	if (arr[l] < arr[m]) {
		if (target < arr[m] && target >= arr[l]) {
			r = m - 1;
		} else {
			l = m + 1;
		}
	} else {
		if (target >= arr[m] && target <= arr[r]) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
}
