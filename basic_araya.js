// var sortedSquares = function(nums){
//     let len = nums.length;
//     let mul = []

//     for(let i = 0; i<len; i++){
//         mul.push(nums[i]*nums[i])

//     }

//     mul.sort((a,b)=>a-b)
//     return mul

// };
// console.log(sortedSquares([-4,-1,0,3,10]))
// var containsDuplicate = function (nums) {

//     nums.sort()
//     for (let i = 0; i <nums.length; i++) {
//         if(nums[i] === nums[i+1]){
//             return true
//         }
//         else{
//             return false
//         }
//     }

// };
// console.log(containsDuplicate([1,2,4,1]));

// const arr = [1,2,4,5,7,9]
// const target = 5;


// function binary_search_it(arr, target){
// 	let left = 0;
// 	let right = arr.length-1;
	
// 	while(left <= right){ // once left is greater than right stop the loop
// 		let mid = Math.floor((right + left)/2)
// 		// console.log('start', left, mid, right)
// 		if(arr[mid] === target){
// 			return mid
// 		}else if(arr[mid] < target){
// 			left = mid +1;
// 		}else{
// 			right = mid -1;
// 		}
// 		console.log('End', left, mid, right)

// 	}

// 	return -1;

// }
// function binary_search(arr, left, right, target){
// 	let mid = Math.floor((left+right)/2);
// 	if(arr[mid] === target){
// 		return mid;
// 	}

// 	if(left > right){
// 		return -1;
// 	}

// 	if(arr[mid]< target){
// 		return binary_search(arr, mid+1, right, target)
// 	}
// 	else{
// 		return binary_search(arr, left, mid-1, target)
// 	}

// }

// console.log(binary_search(arr, 0, arr.length-1, target))


var removeDuplicates = function(nums) {
	let len = nums.length;
	let temp = []
	for(let i = 0; i<len-1; i++){
		for(let j= 1; j<len; j++){
			if(nums[i] !== nums [j]){
				temp.push(nums[i])

			}
		}
	}
	// for(let j= 0; j<len; j++){

	// 	if(nums[j] !== nums [j+1]){
	// 		temps.push(nums[j])

	// 	}

	// }
	return temp
    
};
let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))