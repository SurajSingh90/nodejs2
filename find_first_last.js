function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === 0){
        return [0,0]
    }
    if(mid === 0){
        return [0,0]
    }
    if (arr[mid] === key) {
      return [mid,mid+1];
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [-1,-1]
}
let arr = [5,8,5,9,9];
            
let x = 9;
console.log(binarySearch(arr, x));
