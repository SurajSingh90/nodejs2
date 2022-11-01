// var countNegatives = function (grid) {
//   let len = grid.length;
//   let count = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j <= len; j++){
//         if (grid[i][j] < 0) {
//             count++;
//           }

//     }

//   }
//   return count;
// };
// let grid =[[5,1,0],[-5,-5,-5]]
// console.log(countNegatives(grid));

// function linear(arr){
//     let temp = 0
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>temp){
//             temp = arr[i]
//         }
//     }
//     return temp
    
// }
// let arr =  [12,34,55,440,6]


// console.log(linear(arr))


// function mostActive(customers) {
//     // Write your code here
    
//     let len = customers.length;
//     let temp = []
//     for(let i =0; i<len;i++){
        
//         for(let j =1; j<len;j++){
//             if(customers[i] !== customers[j]){
//                 temp = customers[i]
//             }
//         }
       
//     }
//    return temp

    
// }
// let customers = ["ss","susraj" ,"si","ni","si","si","n","suraj","sjs"]
// console.log(mostActive(customers))


var intersection = function(nums1, nums2) {
    let temp = []
    for(let i =0; i<nums1.length; i++){
        let c = 0
        for(let j =0; j<nums2.length; j++){
            if(nums1[i] === nums2[j]){
                c++;
                temp.push(nums1[i])
            }
        
        }
        return c
    }
    
    
};
console.log(intersection( [4,9,5],[9,4,9,8,4]))