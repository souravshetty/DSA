var numJewelsInStones = function (jewels, stones) {
	let jSet = new Set();
	for (let i = 0; i < jewels.length; i++) {
		jSet.add(jewels[i]);
	}
	let count = 0;
	for (let j = 0; j < stones.length; j++) {
		if (jSet.has(stones[j])) {
			count++;
		}
	}
	return count;
};
// Best way to check if an element is there or not is by using sets 

// jewels="aA"
// stones="aAAbbbb"
// op=3