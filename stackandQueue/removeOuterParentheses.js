var removeOuterParentheses = function (s) {
	let level = 0;
	let ans = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			++level;
			if (level > 1) {
				ans = ans + s[i];
			}
			// ans+=((level>1)?s[i]:"")
		} else {
			ans += level > 1 ? s[i] : "";
			--level;
		}
	}
	return ans;
};
///This is without stack