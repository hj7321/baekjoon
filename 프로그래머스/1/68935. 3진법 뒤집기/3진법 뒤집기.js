function solution(n) {
  let arr = [];
  while (true) {
    if (n === 1 || n === 2) {
      arr.push(n);
      break;
    }
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }
  return arr.reverse().reduce((acc, cur, idx) => {
    acc += cur * 3 ** idx;
    return acc;
  }, 0);
}