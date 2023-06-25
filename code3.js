function nextPermutation(nums) {
    let i = nums.length - 2;
  
    // Find the first pair (i, i+1) such that nums[i] < nums[i+1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = nums.length - 1;
  
      // Find the smallest element in nums[i+1:] that is greater than nums[i]
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
  
      // Swap nums[i] and nums[j]
      swap(nums, i, j);
    }
  
    // Reverse the subarray nums[i+1:]
    reverse(nums, i + 1);
  
    return nums;
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start) {
    let left = start;
    let right = nums.length - 1;
  
    while (left < right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  
  // Test the function
  const nums = [1, 2, 3];
  const result = nextPermutation(nums);
  console.log(result);
  