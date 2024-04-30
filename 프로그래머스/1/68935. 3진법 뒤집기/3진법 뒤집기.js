function solution(n) {
  let arr = [];
  while (true) {
    if (n === 1 || n === 2) {
      arr.unshift(n);
      break;
    }
    arr.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return arr.reduce((acc, cur, idx) => acc + cur * 3 ** idx, 0);
}