var productExceptSelf = function(nums) {
    // let same = 0;
    let mul = 1
    let div = []
    for(let i =0; i<nums.length; i++){
        mul = mul*nums[i]
        parseInt(div.push(mul/nums[i]))
        
        
            

        
       
    }
    
    return div
   
};
console.log(productExceptSelf([1,2,3,4]))