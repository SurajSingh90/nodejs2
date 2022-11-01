
// function squareRoot(number, precision) {
//   let start = 0,
//     end = number;
//   let mid;

//   // variable to store the answer
//   let ans = 0.0;

//   // for computing integral part
//   // of square root of number
//   while (start <= end) {
//     mid = (start + end) / 2;

//     if(mid * mid == number){
//       ans = mid;
//       break;
//     }

//     // incrementing start if integral
//     // part lies on right side of the mid
//     if (mid * mid < number) {
//       start = mid + 1;
//       ans = mid;
//     }

//     // decrementing end if integral part
//     // lies on the left side of the mid
//     else {
//       end = mid - 1;
//     }
//   }

//   // For computing the fractional part
//   // of square root upto given precision
//   let increment = 0.1;
//   for (let i = 0; i < precision; i++) {
//     while (ans * ans <= number) {
//       ans += increment;
//     }

//     // loop terminates when ans * ans > number
//     ans = ans - increment;
//     increment = increment / 10;
//   }
//   return ans;
// }
// console.log(squareRoot(25,3))

// function getPairs(A, B, n)
// {
//     // Initializing the difference array D
//     let D = new Array(n);
 
//     // Computing the difference between the
//     // elements at every index and storing
//     // it in the array D
//     for (let i = 0; i < n; i++) {
//         D[i] = A[i] - B[i];
//     }
 
//     // Sort the array D
//     D.sort((a, b) => a - b);
 
//     // Variable to store the total
//     // number of pairs that satisfy
//     // the given condition=
//     let total = 0;
 
//     // Loop to iterate through the difference
//     // array D and find the total number
//     // of pairs of indices that follow the
//     // given condition
//     for (let i = n - 1; i >= 0; i--) {
 
    
//         if (D[i] > 0) {
//             total += n - i - 1;
//         }
 
        
//         else {
//             let k = binary_search(D, 0, D.length, -D[i])
//             total += n - k;
//         }
//     }
//     return total;
// }
 
// function binary_search(a, low, high, element)
// {
//     while(low < high){
//         let middle = low +  Math.floor((high - low)/2);
//         if(a[middle] > element)
//             high = middle;
//         else
//             low = middle + 1;
//     }
//     return low;
// }
// console.log(getPairs([4,8,2,6, 2],[4,5,4,1,3],5))

// function getPairs(A, B, n)
// {
//     // Initializing the difference array D
//     let D = new Array(n);
//     let count = 0
//     // Computing the difference between the
//     // elements at every index and storing
//     // it in the array D
//     for (let i = 0; i < n; i++) {
//         D[i] = A[i] - B[i];
//     }
//     D.sort((A,B) => A-B)
  
//     for (let j = 0; j < n; j++) {
//       for(let k = j+1; k<n; k++){
//         if(D[j]+D[k] > 0)
//           count++
//       }
//     }
//     console.log(D)
//     return count
    
// }

// console.log(getPairs([4,8,2,6, 2],[4,5,4,1,0],5))

// var searchMatrix = function(matrix, t) {
//   let convert = [...new Set(matrix.flat())]
//   let left =0; let right = convert.length;
//   while(left<=right){
//     let mid = parseInt((left+right)/2)
//     if(convert[mid] === t){
//       return true
//     }
    
//     if(convert[mid] < t){
//       left = mid+1
//     }
//     else{
//       right = mid-1
//     }
//   }
//   return false
  

    
    
// };
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,80]]

// console.log(searchMatrix(matrix,160))
// // searchMatrix(matrix,3)

// // let matrix = 
// // let convert = matrix => [].concat(...matrix);
// // console.log()

// // const allAnimals = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]

// // const filteredAnimals = [...new Set(allAnimals.flat())];
// // console.log(filteredAnimals)

