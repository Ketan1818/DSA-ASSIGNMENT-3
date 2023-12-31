function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicates
        }
  
        let left = j + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
  
            while (left < right && nums[left] === nums[left - 1]) {
              left++; // Skip duplicates
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--; // Skip duplicates
            }
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  // Test the function
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result);
  