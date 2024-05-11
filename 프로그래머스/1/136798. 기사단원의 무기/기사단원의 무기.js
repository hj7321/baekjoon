function solution(number, limit, power) {
  let divisor = Array(number).fill(1);
  
  for (let i = 2; i <= number; i++) {
    let sqrtNum = Math.sqrt(i);
    let divisorCnt = 0;
    for (let j = 1; j <= sqrtNum; j++) {
      if (i % j === 0) divisorCnt++;
    }
    divisor[i - 1] = String(sqrtNum).includes(".")
      ? divisorCnt * 2
      : divisorCnt * 2 - 1;
  }

  return divisor
    .map((num) => (num = num > limit ? power : num))
    .reduce((acc, cur) => acc + cur);
}
