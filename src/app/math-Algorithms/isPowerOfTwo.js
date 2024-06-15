// Given a number 'n', determine if the number is power of 2 or not
// An interger is a power of 2 if there exisit an integr 'x' such that 'n' === 2^x
// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

// bitwise
function isPowerOftwoBitwise(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

function isPowerOftwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOftwo(1)); // 01 & 00 -> 00
console.log(isPowerOftwo(3)); // 11 & 10 -> 10
console.log(isPowerOftwo(4)); // 100 & 011 -> 000
console.log(isPowerOftwo(5)); // 101 & 100 -> 100
