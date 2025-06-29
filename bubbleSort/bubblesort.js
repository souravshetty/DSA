let arr=[1,2,3,4,5]

for(let i=0;i<arr.length-1;i++){
    let isSwapped=false;
    console.log("Pass", i); // to check if break is working
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
        let temp=arr[j];
       arr[j]=arr[j+1];
       arr[j+1]=temp;
       isSwapped=true;
        }

    }
    if(!isSwapped)break;
  
}
console.log("Sorted Array:", arr);


///just rightclick and open in integarted terminal and type node bubblesort.js

// if there are 1000 elements and alreasy all of them are i order so u need not run the whole thing again jaut add a condition isSwapped