function lower(nums,t){
    let rigth = nums.length+1
    let left = 0
    while(left<rigth){
        let mid = parseInt((left+rigth)/2)
        if(nums[mid]<t){
            left = mid+1
        }
        else{
            rigth = mid
        }
    }
    return left
}
function Up(nums,t){
    let rigth = nums.length+1
    let left = 0
    while(left<rigth){
        let mid = parseInt((left+rigth)/2)
        if(nums[mid]>t){
            rigth = mid
        }
        else{
            left = mid+1
        }
    }
    return rigth
}


console.log(Up([2,4,6,6,8,10],9))