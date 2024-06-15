// What is Fibonacci series----> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....

function recursionFibonacci(n) {
  if (n < 2) return n;
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}

function fibonacci(m) {
  let res = [0, 1];
  for (let i = 2; i < m; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res;
}

console.log(fibonacci(0)); //0
console.log(fibonacci(1)); //1
console.log(fibonacci(2)); //1
console.log(fibonacci(6)); //8
console.log(fibonacci(10)); //55
