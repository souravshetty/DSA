function removeElement(arr) {
	if (arr.length == 0) return;
	let targetVal = 2;
	let x = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != targetVal) {
			arr[x] = arr[i];
			x++;
		}
	}
	return x;
}

let arr = [1, 1, 2, 3, 4, 5, 5];

let k = removeElement(arr);
console.log(k);
console.log(arr);
