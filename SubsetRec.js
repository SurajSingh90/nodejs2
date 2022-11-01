// // function sum(n) {
// //     if (n == 1)
// //         return n;

    
// //     let r = n*sum(n-1)  
// //     return r
    
    
   
	
// // }
// // console.log(sum(5))

// function highNum(arr,i){
//     if( i < arr.length){
//         return
//     }
//     highNum(arr,i++)
//     let temp =0;
//     if(arr[i]>temp){
//         temp = arr[i]
//     }
//     return temp
    

// }
// console.log(highNum([-1, 3, 5, 6, 99, 12, 2],0))

// function func( a , b){ 
//     if(b==0) return 0; 
//     if(b==1) return a; 
//     return a + func(a,b-1); 
// }
// console.log(func(3,8))



// function rec(num){ 
//     return (num) ? num%10 + rec(num/10):0; 
// } 
// console.log(rec(4567))

// function something(number) { 
//     if(number <= 0) return 1; 
//     else return number * something(number-1); 
// } 
// console.log(something(4))

function fun( x, y) { 
    if (x == 0) return y; 
    return fun(x - 1, x + y); 
}
console.log(fun(4,3))