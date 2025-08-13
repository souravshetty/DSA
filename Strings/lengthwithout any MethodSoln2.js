var lengthOfLastWord = function (s) {
	let n = s.length - 1;
	let count=0;
	while (n >= 0) {
		if (s[n] != " ") { 
			// no space incremnet the count
			count++
			}
			else if(count>0){
				// if no space and count is >0 that is it reads all the words and when again it entcounters a space 
				break;

			}
			n--; 
			// run n-- irrespective of the condn
	} 

	return count;
};
