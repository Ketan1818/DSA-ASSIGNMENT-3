function findMissingRanges(nums, lower, upper) {
    const ranges = [];
  
    let current = lower - 1;
    const n = nums.length;
  
    for (let i = 0; i <= n; i++) {
      let next = (i < n) ? nums[i] : upper + 1;
  
      if (next > current + 1) {
        ranges.push(getRange(current + 1, next - 1));
      }
  
      current = next;
    }
  
    return ranges;
  }
  
  function getRange(start, end) {
    return (start === end) ? [start] : [start, end];
  }
  
  // Test the function
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  console.log(result);
  