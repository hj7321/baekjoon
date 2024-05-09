function solution(k, m, score) {
  let answer = 0;
  let mCount = 0;
  let n = score.length;
  let boxNum = Math.floor(n / m);
  score.sort((a, b) => a - b);
  while (score.length !== n - boxNum * m) {
    if (score.lastIndexOf(k) !== -1) {
      score.pop();
      mCount++;
    } else k--;
    if(mCount === m) {
      answer += k * m;
      mCount = 0;
    }
  }
  return answer;
}