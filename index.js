
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

let arr=[4,1,1,4,2]
let xor=0;
for(let i=0;i<arr.length;i++){
	xor=xor^arr[i];
}
console.log(xor) ;