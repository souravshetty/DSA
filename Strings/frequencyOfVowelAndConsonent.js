var maxFreqSum = function (s) {
	let map = {};
	for (let i = 0; i < s.length; i++) {
		if (!map[s[i]]) {
			map[s[i]] = 1;
		} else {
			map[s[i]]++;
		}
	}
	let count = 0;
	let vowels = ["a", "e", "i", "o", "u"];
	let maxVowel = 0;
	let maxConsonent = 0;
	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) {
			if (map[s[i]] > maxVowel) {
				maxVowel = map[s[i]];
			}
		} else if (map[s[i]] > maxConsonent) {
			maxConsonent = map[s[i]];
		}
	}
	return maxVowel + maxConsonent;
};
