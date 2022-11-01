// function freq(arr){

//     let max = 0;
//     let frequenc = 0;
//     let n = arr.length;
//     for(i=0;i<n; i++){
//         let count = 0;
//         for(j=0;j<n;j++){
//             if(arr[i] == arr[j])
//                 count++;

//         }
//         if(count>max){
//             max = count;
//             frequenc = arr[i]
//         }
//     }
//    return frequenc
// }
// let arr = [1,2,2,30,40,30,30,30,2,2,5]
// console.log(freq(arr))

function firstElement(str) {
  let max = 0;
  let freq = []
  for (i = 0; i < str.length; i++) {
    let count = 0;
    for(j=0; j <str.length; j++){
        if(str[i] == str[j]  && i !== j){
            count++;
        }

    }
    if(count>=max){
        max = count;
        freq = str[i]
    }
  }
  
 return freq
}
let str = "unacadaemydd";
console.log(firstElement(str))
