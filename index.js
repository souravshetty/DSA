
let container =document.getElementById('pattern');
for (let i = 0; i < 4; i++) {
	let row = "";
	for (let j = 0; j < i + 1; j++) {
		row = row + "*";
	}
	const line=document.createElement("div");
    line.textContent=row;
    container.appendChild(line);
}
