 function subArrayExists(arr, n){
    let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];
      // If the current sum is 0, a zero-sum subarray exists
      if (sum === 0) {
        return true;
      }
    }
  }
  // No zero-sum subarray found
  return false;
}
let array1 = [4, 2, -3, 1, 6];
let array2 = [4, 2, 0, 1, 6];
let n=5;
subArrayExists(array1, n)