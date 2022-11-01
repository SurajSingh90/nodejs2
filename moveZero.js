/**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  var moveZeroes = function(nums){
//     let len = nums.length;
//     let temp1 = []
//     let temp2 = []
    
//     for(let i =0; i<len; i++){
        
//         if(nums[i] != 0){
//             temp1.push(nums[i])
//         }
//         if(nums[i] === 0){
//             temp2.push(nums[i])
//         }
        
        
        
//     }
//     let result = temp1.concat(temp2)
//     return result
    
// };
// let x = moveZeroes([0,1,0,3,12])
// console.log(x)


var runningSum = function(nums) {
    let sum = 0;
    let temp = []
    for(let i =0 ; i<nums.length; i++){
        sum = sum+nums[i]
        // console.log(temp.push(sum))
        temp.push(sum)
        

    }
    // console.log(temp)
    return temp
    
    
};
console.log(runningSum([1,2,3,4,5]))