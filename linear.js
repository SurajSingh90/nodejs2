// function present(arr,t){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] === t){
//            console.log("yes")
//         }

//     }
// }
// let t = 10;
// let arr = [1,2,3,4,10,8]
// // console.log(present(arr,t))
// parent(arr,t)

// function linearSearch(arr, key){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === key){
//             return i
//         }
//     }
//     return -1
// }

// function binarySearch(arr, key) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === key) {
//       return arr[mid]
//     } else if (arr[mid] < key) {
//       start = mid+1;
//     } else {
//       end = mid-1;
//     }

//   }

// }
// let arr = [1, 2, 4, 8, 9, 10];
// let x = 8;
// console.log(binarySearch(arr, x));
// function s(arr , t) {
 
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === t) {
//       return true;
//     }
//   }
// }
// let arr = [1, 2, 4, 8, 9, 10];
// console.log(s(arr , 4))


// function linear(arr,target,index){
//     if(arr[index] === target){
//         // return arr[index]
//         console.log("target find",arr[index])
//     }
//     if(arr.length == index){
//         // return -1
//         console.log("not found")
//     }
//     return linear(arr,target,index+1)
// }
// console.log(linear([1,24,58,6],58,0))


// function binarySearch(arr,target){
//     let left = 0;
//     let right = arr.length;
//     while(left <= right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid] + arr[mid-1] === target || arr[mid] + arr[mid+1] === target){
//             if(arr[mid] + arr[mid-1] === target){
//                 return [arr[mid],arr[mid-1]]
//             }
//             else{
//                 return [arr[mid],arr[mid+1]]
//             }
           
//         }
//         if(arr[mid] + arr[mid-1] <target || arr[mid] + arr[mid+1] < target){
//             left = mid+1
//         }
//         else{
//             right = mid -1
//         }

//     }
//     return -1
// }
// console.log(binarySearch([2,7,11,15],13))


function dublicate(arr,target){
    let left = 0;
    let right = arr.length;
    while(left<=right){
        let mid = parseInt((left+right)/2)
        if(arr[mid] === target){
            if( arr[mid] === arr[mid-1]  || arr[mid] === arr[mid+1] )
                return true
            else
                return false

        }
        if(arr[mid] < target){
            left = mid+1
        }
        else{
            right = mid-1
        }
    }
    return false
}


console.log(dublicate([1, 3, 5, 5,7, 90, 9,9],9))


