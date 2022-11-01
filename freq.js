function freques(nums){
    let len = nums.length;
    let c = 0
    
    let temp = []
    for(let i = 0; i<len; i++){
        c = nums[i]
        for(let j = 1; j<len; j++){
            if(nums[i] === nums[j]){
                c++;
                // temp.push(c++)
                
            }
        }
       
    }
    temp.push(c)
    return temp

}
let nums = [2,2,1,1,2,5,2]
console.log(freques(nums))