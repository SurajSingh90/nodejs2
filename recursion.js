// function rec(n){
//     if(n == 0){
//       return
//     }
//     console.log(n)
//     rec(n-1)
//   }
//   rec(5)

// function rec(i,n,sum){
//       if(i == n){
//         sum += i
//         console.log(sum)

//         return
//       }
//       sum +=i;

//       rec(i+1,n,sum)
//       console.log(i)

// }
// rec(1,5,0)

/**factorial number */

// function mul(n){
//   if(n==1){
//     // console.log(1)
//     return n
//   }
//   let v = n*mul(n-1)
//   console.log(v)
//   // return v
// }
// // console.log(mul(5))
// mul(5)

// let t1 = ["one"]
// let t2 = ["neol","er"]

// let v1 = t1.length;
// let v2 = t2.length;

// for(i=0;i<v1;i++){
//   for(j=0;j<v2;j++){
//     if(v1[i] == v2[j]){
//       console.log("ture")
//     }
//     else{
//       console.log("dal")
//     }
//   }

// }

// let v = [1,2,3,4,5]
// temp = v[v.length-1]

// for(i=0;i<v.length;i++){
//   temp = v[v.length-1]

// }
// console.log(temp)

// let v = "bana";
// let c = 0
// for(i=0;i<v.length;i++){
//   if(v[i] == "s"){
//     c++
//   }
// }
// console.log(c)

/**factorialss */
// function fac(n){
//     if(n==1){
//         return 1
//     }
//     let temp = fac(n-1)
//     let v = n*temp

//     return v
// }
// // console.log(fac(5))
// fac(5)

// function bibo(n){
//     let firstTerm = 0
//     let secondTerm = 1

//     for(i=0;i<n;i++){
//         let nextTerm = firstTerm + secondTerm;
//         firstTerm = secondTerm;
//         secondTerm = nextTerm;

//     }
//     return nextTerm
//     // console.log(firstTerm)

// }
// // bibo(5)
// console.log(bibo(5))

// function fib(n){
//     if(n==0 || n==1){
//         return n
//     }
//     let res = fib(n-1);
//     let res1 = fib(n-2);
//     let tol = res+res1
//     return tol
// }
// for(i=0;i<=5;i++){
//     console.log(fib(i))

// }

// function sort(arr,i){
//     if(i==arr.length-1){
//         return true
//     }
//     let check = sort(arr,i+1)
//     if(check && arr[i]<arr[i+1]){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(sort([1,2,3,4,5],0))

// function mul(n){
//     if(n==1){
//         return
//     }
//     sum = mul(n-1)+n

//     return sum
// }

// console.log(mul(5))
// // mul(5,10)

// let n = 5
// let v = 1
// for(i=1;i<=n;i++){
//     v = v*i

// }
// console.log(v)

// function fib(n) {
//   if(n == 0 || n==1) {
//     return 1;
//   }
//   let temp = fib(n - 1);
//   let temp2 = fib(n - 2);
//   let sum = temp + temp2;
//   // console.log(sum)
//   return sum;
// }
// console.log(fib(5));
// // fib(5)

// function power(i){
//     if(i==0){
//         return 1
//     }
//     let v1 = power(i-1)
//     let pow = 
// }
// console.log(power(2,3))

// const gSum = (n) => {
//     // Base Case
//     if(n === 0) return 1;
//     // Recursive Call and Calculation
//     return (1/Math.pow(5,n)) + gSum(n-1);
// };

// console.log(gSum(2));


// function multiSum(num,ten=10) {
//     if (ten == 0) { return 0 }
//     return ten * num + multiSum(num, ten-1)
//    }


// function palidoram(str){
//     let n = parseInt(str.length/2)
//     for(i=0;i<n;i++){
//         for(j=str.length-1; j>n; j--){
//             if(str.i== str.j){
//                 // console.log("yes")
//                 return "yes"
//             }
//             else{
//                 // console.log("not")
//                 return "no"
//             }
//         }
//     }
// }

// console.log(palidoram("refer"))
// // palidoram("radar")

// function RecPalid(str,i){
//     let len = parseInt(str.length/2)
//     if(i<len){
//         return
//     }
//     let rev = RecPalid(str.length-1)
//     let forw = RecPalid(str,i+1)
//     if (rev != forw){
//         return "false"
//     }
//     else{
//         return "yes"
//     }
// }
// console.log(RecPalid("radar"))
