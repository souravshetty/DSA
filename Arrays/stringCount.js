let s = "SUCCESS";
let map = {};
for (let i = 0; i < s.length; i++) {
	if (map[s[i]]) {
		map[s[i]]++;
	} else {
		map[s[i]] = 1;
	}
}
console.log(map);
