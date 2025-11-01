
// let container =document.getElementById('pattern');
// for (let i = 0; i < 4; i++) {
// 	let row = "";
// 	for (let j = 0; j < i + 1; j++) {
// 		row = row + "*";
// 	}
// 	const line=document.createElement("div");
//     line.textContent=row;
//     container.appendChild(line);
// }

// let arr=[4,1,1,4,2]
// let xor=0;
// for(let i=0;i<arr.length;i++){
// 	xor=xor^arr[i];
// }
// console.log(xor) ;

let arr=[1,3,5,6,6,7]
let target=7;
let left = 0;
let right = arr.length - 1;
while(left<=right){
	let mid=Math.floor((left+right)/2)
	if (target===arr[mid]){
		console.log(mid)
		break;
	}
	else if(target<arr[mid]){
		right=mid-1
	}
	else{
		left=mid+1
	}

}