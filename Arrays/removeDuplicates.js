function removeDuplicates(arr) {
	if (arr.length == 0) return;
	let x = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != arr[x]) {
			x++;
			arr[x] = arr[i];
		}
	}
    return (x+1)
    //bcz x starts from 0
}

let arr = [1, 1, 2, 3, 4, 5, 5];

let k = removeDuplicates(arr);
console.log(arr.slice(0,k))
