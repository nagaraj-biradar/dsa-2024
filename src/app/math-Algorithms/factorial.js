// What is Factorial ---> n! = n × (n - 1)!  ---> 4! = 4*3*2*1 -->24

function factorial(n) {
  let res = 1;
  if (n === 0) return 1;
  for (let i = n; i > 0; i--) {
    res = res * i;
  }
  return res;
}

function recursionFactional(m) {
  if (m === 0) return 1;

  return m * recursionFactional(m - 1);
}

// console.log(factorial(0));
console.log(recursionFactional(4));
