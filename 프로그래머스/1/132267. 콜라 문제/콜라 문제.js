function solution(a, b, n) {
  let refrigerator = 0;
  let sum = 0;
  const divide = a / b;
  if (n % a) {
    refrigerator += n % a;
    n = n - (n % a);
  }
  while (true) {
    n = Math.floor(n / divide);
    sum += n;
    refrigerator += n;
    if (refrigerator < a) break;
    if (refrigerator % a) {
      n = refrigerator - (refrigerator % a);
    } else {
      n = refrigerator;
    }
    refrigerator -= n;
  }
  return sum;
}