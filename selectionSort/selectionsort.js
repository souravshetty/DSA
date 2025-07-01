let arr=[7,5,4,4,3,2,1]
function selectionSort(arra) {
    

let n =arra.length;
for(let i=0;i<n-1;i++){
    let min=i;
    for(let j=i+1;j<n;j++)
    {
        if(arr[j]<arr[min]){
            min=j;
        }

    }
    let temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}
return arr;
}
let result=selectionSort(arr)
console.log(result);