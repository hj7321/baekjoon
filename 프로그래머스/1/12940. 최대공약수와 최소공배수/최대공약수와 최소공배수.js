function solution(n, m) {
  let arr = [1, 1];
  let i = 2;
  while (i <= Math.min(n, m)) {
    if (n % i === 0 && m % i === 0) {
      arr[0] *= i;
      n /= i;
      m /= i;
    } else i++;
  }

  arr[1] = n * m * arr[0];
  return arr;
}