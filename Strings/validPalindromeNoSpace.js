var isPalindrome = function (s) {
	s = s.toLowerCase();
	let filteredResult = "";
	let rev = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i].match(/[a-z0-9]/i)) {//regex 
			filteredResult += s[i];
			rev = s[i] + rev;
		}
	}
	// let rev=filteredResult.split("").reverse().join("");
	return filteredResult === rev;
};
