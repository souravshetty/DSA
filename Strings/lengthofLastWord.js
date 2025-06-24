/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let word = s.trim();
	let hur = word.split(" ");
	return hur[hur.length - 1].length;
};
