// What is Prime number ---> Any number which is divisible by itself & 1 only.
// Ex:- 2,3,5,7 etc and 1 in not prime

function isPrime(n) {
  if (n < 2) return "Not Prime";

  for (let index = 2; index < n; index++) {
    if (n % index === 0) return "Not Prine";
  }
  return " Is Prime";
}

console.log(isPrime(2));
