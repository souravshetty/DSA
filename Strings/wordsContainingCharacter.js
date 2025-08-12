var findWordsContaining = function(words, x) {
    let res=[];
    for (let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(words[i][j]===x){
                res.push(i);
                break;
            }
        }
    }
    return res;
}

//Outer loop for words and inner loop for character in each word
// TC=0(n*m)
// n= no of words
// m=max length of each word