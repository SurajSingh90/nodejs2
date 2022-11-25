function quicksort(arr,low,high){
    if(low >= high){
        return 
    }
    let pi = partition(arr,low,high)
    quicksort(arr, low, pi-1);
    quicksort(arr,pi+1, high)
}

function partition(arr, low, high){
    let pivot = arr[high]
    let i = low-1;
    for(let j = low; j<high; j++){
        if(arr[j]< pivot){
            i++
            [arr[j],arr[i]] = [arr[i],arr[j]]
        }
    }
    [arr[i+1],arr[high]] = [arr[high], arr[i+1]]
    return i+1;
}

let arr = [4,2,1,5,6,8];
quicksort(arr,0,arr.length-1);
console.log(arr);
