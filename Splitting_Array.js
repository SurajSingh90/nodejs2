// function verify(mid, array, n, K)
// {   
//     let sub_aaray = 0;
//     let sum =0;
//     for(let i =0; i<n; i++){
//         if(array[i]>mid){
//             return false
//         }
//         sum += array[i]

//         if(sum > mid){
//             sub_aaray++;
//             sum = array[i]
//         }
//     }
//     sub_aaray++;
//     if(sub_aaray <= k){
//         return true;
        
//     }
//     return false
// }

// function split(array,n,K){
//     var max = array.reduce((a,b)=>Math.max(a,b)); // 10
//     var start = max; //10
//     var end = 0; 

//     for (var i = 0; i < n; i++) {
//         end += array[i]; 
//     }
// // end = 42
   
//     var answer = 0;
//     while (start <= end) {
//         var mid = parseInt((start + end) / 2); // 26

      
//         if (verify(mid, array, n, K)) {
//             answer = mid;
//             end = mid - 1;
//         }
//         else {
//             start = mid + 1;
//         }
//     }

//     return answer;

// }
// var array = [1, 3, 2, 4, 10, 8, 4, 2, 5, 3];
// var n = array.length;
// var k = 4;
// console.log(split(array, n, k));

function verif(arr, n, k){
    
}
