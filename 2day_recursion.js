// function add(n,i){
//     if(i==n.length-1){
//         return 
//     }
//     let sum = add(n,i+1)
//     let c = 0
//     if(sum == 0){
//         c++
    
//     }
//     return c
// }
// console.log(add([1,0,2,0,0],0))

// function reverse(str) {
    

	
// }
let arr = [4,3,-1,-3,5,3,6,7];
let k = 3;
let i = 0;
let max=arr[i];
for ( i; i < k; i++){
    if (arr[i] > max) {
       max = arr[i]
   }
}
let maximum = max;
let ans = [];
ans.push(max);
for (let i = k; i<arr.length; i++){
    maximum = Math.max(maximum, arr[i]);
    ans.push(maximum);
}
console.log(ans)