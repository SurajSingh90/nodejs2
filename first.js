// let a = [
//   [1, 5, 2],
//   [5, 5, 0],
//   [1, 0, 0],
// ];

// let m = 3;
// let n = 3;
// let tol = n * m;
// let div = parseInt(tol / 2);

// let count = 0;

// for (i = 0; i < m; i++) {
//   for (j = 0; j < n; j++) {
//     if (a[i][j] == 0) {
//       count++;
//     }
//   }
// }

// // if (count >= div) {
// //   console.log("yes");
// // } else {
// //   console.log("not");
// // }
// (count >= div) ? console.log("yes") :  console.log("not");
// function rex(a) {
//   let i = -1;
//   let p = 0;
//   for (j = 0; j < a.length; j++) {
//     if (a[j] < p) {
//       i++;
//       [a[i], a[j]] = [a[j], a[i]];
//     }
//   }
//   return a
// }
// let a = [-3, -2, 5, 1, -8];
// console.log(rex(a))

// let a = [-3, -2, 5, 1, -8];
// let len = a.length;
// let temp = a[len-1]
// for (j = len-1; j >=1; j--){
//     a[j] = a[0]

// }

// a[0] = temp
// console.log(a)

// function lin(a) {
//   let j = -1;
//   for (i = 0; i < a.length; i++) {
//     if (a[i] == 0) {
//         j++
//       [a[j], a[i]] = [a[i], a[j]];
//     }
//   }
//   return a
// }
// let a = [0, 3, 2, 0, 15, 0, 0, 1];
// console.log(lin(a))

// function plusMinus(arr) {
//   // Write your code here
//   let neg = 0;
//   let one = 0;
//   let zero = 0;
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] > 0) {
//       one++;
//     }
//     else if (arr[i] == 0) {
//         zero++;

//       }
//     else if (arr[i] <0) {
//         neg++;

//       }
//   }
//   return((one/len).toFixed(4))
//   return((zero/len).toFixed(4))
//   console.log((neg/len).toFixed(4))
// }

// let arr = [1, 1, 0, -1, -1];
// // console.log(plusMinus(arr));
// plusMinus(arr)

// var twoSum = function(nums, target) {
    
//     for(let i =0;i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]==target){
//                 // return([i,j])
//                 console.log([i,j])
//             }
//         }
        
//     }
    

// };  
 
// v = twoSum([1,3,5,4],9)
// console.log(v) 

