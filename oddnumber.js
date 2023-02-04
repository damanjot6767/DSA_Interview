// Given an array of integers, identify the number that appears an odd number of times.
// Note: There will always be only one integer that appears an odd number of times.
// Write a function to solve the problem. The function signature is as follows:

function findOdd(A) {
    let StoreAccurance={};
    let n = A.length;
    //iterate the whole Array
    for(let i=0;i<n;i++){
        if(StoreAccurance[A[i]]===undefined){
            StoreAccurance[A[i]]=1;
        }
        else{
            StoreAccurance[A[i]]++;
        }
    }
    //find answer in Store using for in loop
    for(var j in StoreAccurance){
       if(StoreAccurance[j]%2===1){
        return j
       }
    }
}

let array= [1,2,2,3,3,3,4,3,3,3,2,2,1]
let Ans = findOdd(array);
console.log(Ans)

 //Note: Time Complexity for above algorythm is O(n)
       //Space Compexity for above algorythm is O(n) 