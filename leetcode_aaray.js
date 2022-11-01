/**Best Time to Buy and Sell Stock */
// var maxProfit = function(prices){
//   let buy = prices[0]
//   let total = 0

//   for(let i=0;i<prices.length;i++){
//     if(prices[i+1]<buy )
//           buy = prices[i+1]
//     if(total<prices[i+1]-buy){
//       total = prices[i+1]-buy
//     }

//   }
//   return total
// }
// console.log(maxProfit([7,1,5,3,6,4]))

/**quniqe element */

// let uniqeElement = function(arr){
//   let elem = 0
//   for(i=0;i<arr.length;i++){
//     for(j= i+1;j<arr.length;j++){
//       if(arr[i]+arr[j] == 5)
//         elem ++;
//     }

//   }
//   return elem

// }
// console.log(uniqeElement([3,2,0,1]))
// uniqeElement([3,2,1,2,3])

function merge(n1, n2, m, n) {
  let k = m + n;
  let sorted = []
  for (i = 0; i < n1.length; i++) {
    for (j = 0; j <n2.length; j++) {
      if(n1[i]<n2[j]){
        sorted[k] = n1[i]
        k++; 
        
      }
      else if(n1[i] == n2[j]){
        sorted[k] = n2[j]
        k++; 
        
      }
    }
  }
  return sorted

}
let m = 3;
let n = 3;

let n1 = [1, 2, 3,];
let n2 = [4, 5, 6];

console.log(merge(n1, n2, m, n));
