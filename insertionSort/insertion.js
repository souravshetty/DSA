// let arr=[7,1,5,12,10,0,4];
// let n=arr.length;
// function insertionSort(a) {
//     for (let i=1;i<n;i++){
//         let curr=i;
//         let prev=i-1;
//         while (a[prev]>a[curr] && prev>=0)
//         {
//             a[prev+1]=a[prev]
//             prev--;
//         }
//         a[prev+1]=a[curr];

//     }
//     return a;
// }
// let result=insertionSort(arr)
// console.log(result)

// the bove solution i am storing the index value in curr so that the small error thats not working 

let arr = [7, 1, 5, 12, 10, 0, 4];
let n = arr.length;
function insertionSort(a) {
	for (let i = 1; i < n; i++) {
		let curr = a[i];
		let prev = i - 1;
		while (a[prev] > curr && prev >= 0) {
			a[prev + 1] = a[prev];
			prev--;
		}
		a[prev + 1] = curr;
	}
	return a;
}
let result = insertionSort(arr);
console.log(result);