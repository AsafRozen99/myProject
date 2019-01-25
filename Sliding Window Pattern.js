Write a function called maxSubarraySum which accepts an array of integers
and a number called n.

The function should calculate the maximum
sum of n consecutive elements in the array.



A Naive Solution

function maxSubarraySum(arr, num){
  if (num > arr.length){
    return null;
  }
  var max = -Infinity;
  for(let i = 0; i < arr.length - num + 1; i++){
    tempporary = 0;
    for(let j = 0; j < num; j++){
      temporary += arr[i + j];
    }
    if (temporary > max) {
      max = temp;
    }
  }
  return max;
}



Sliding Window Approach

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum + arr[i] - arr[i - num]
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 3)  // 21
maxSubarraySum([4, 2, 1, 6], 1)  // 6
maxSubarraySum([4, 2, 1, 4, 2], 4)  // 13
maxSubarraySum([], 3)  // null
