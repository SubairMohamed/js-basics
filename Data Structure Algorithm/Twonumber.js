const array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function TwoNumberFc(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === targetSum) [array[i], array[j]];
    }
  }
}

function TwoNumberFc2(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const requiredNumber = targetSum - num;
    if (requiredNumber in nums) {
      return [requiredNumber, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

function TwoNumberFc3(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === targetSum) return [array[left], array[right]];
    else if (sum > targetSum) right--;
    else if (sum < targetSum) left++;
  }
}
