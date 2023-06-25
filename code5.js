function plusOne(digits) {
    const n = digits.length;
    let carry = 1;
  
    for (let i = n - 1; i >= 0; i--) {
      digits[i] += carry;
  
      if (digits[i] === 10) {
        digits[i] = 0;
        carry = 1;
      } else {
        carry = 0;
        break;
      }
    }
  
    if (carry === 1) {
      digits.unshift(1);
    }
  
    return digits;
  }
  
  // Test the function
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result);
  