function count(nums){
    let max = Math.max(...nums)
    let freq = new Array(max+1).fill(0)

    for(let i =0; i<nums.length; i++){
        freq[nums[i]] += 1
    }
    let i =0; j =0;
    console.log(freq,max)
    while(i <= max){
        console.log('i',i)
        if(freq[i] > 0){
            nums[j] = i;



            
            freq[i]--;
            j++;
        }else{
            i++
        }
    }
    return nums
}
let nums = [1, 4, 2, 3, 1, 1];
console.log(count(nums))