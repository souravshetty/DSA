let arr=[2,3,4,5,6,7,8]
let target=11;
let i=0;
let j=n-1;
while(l<j){
    let sum= arr[i]+arr[j];
    if(sum<target){
        i++;
    }
    else if(sum>target){
        j++;

    }
    else{
        return[i,j]
    }

}