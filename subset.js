var subsets = function(nums) {
    let bit = nums.length;
    let powSet = Math.pow(2,bit);
    let ans = []
    let list = [];
    for(let counter=0; counter<powSet;counter++){
        let subsets = []
        let temp = ''
        for(let j =0; j<bit; j++){
            if(counter & (1<<j)){
                subsets.push(nums[j])
                temp += nums[j].toString() + '$';

            }

        }
        
        if(list.indexOf(temp)== -1){
            ans.push(subsets);
            list.push(temp)
        }
    }
    return list

}
   
let nums = [1,2,3]
console.log(subsets(nums))
