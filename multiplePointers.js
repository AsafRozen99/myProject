Write a function called sumZero which accepts a sorted array of integers.

The function should find the first pair where the sum is 0.

Return an array that includes both values that sum to zero
or undefined if a pair does not exists.



Naive Solution

function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}
sumZero([-4, -3, -2, -1, 0, 1 ,2 ,5])



function sumZero(sortedArray){
  let left = 0;
  let right = sortedArray.length - 1
  while(left < right){
    let sum = sortedArray[left] + sortedArray[right];
    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]];
    } else if (sum > 0){
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1 ,2 ,3, 5])