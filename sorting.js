function merge(num1, num2){
   
    let i =0; 
    let j=0;
    let k = 0
    let temp  = []
    while(i < num1.length && j < num2.length){
        if(num1[i] < num2[j]){
            temp[k] = num1[i]
            i++;
            k++;
        
    
        }
        else{
            temp[k] = num2[j];
            j++;
            k++;
        }
        

    }
    if(i == num1.length){
        while(j != num2.length){
            temp[k] = num2[j]
            k++;
            j++;
        }
    }
    if(j == num2.length){
        while(i != num1.length){
            temp[k] = num1[i]
            k++;
            i++;
        }
    }
    return temp

}

let num1 = [1,3]
let num2 = [2]
// console.log(merge(num1,num2))
let arr = merge(num1,num2)
let mid =0;
let n = arr.length;
if(n%2 == 0){
    mid = parseInt(arr[n/2]+ arr[(n/2)-1])/2
}
else{
    mid = arr[parseInt(n/2)]
}
console.log(mid)


