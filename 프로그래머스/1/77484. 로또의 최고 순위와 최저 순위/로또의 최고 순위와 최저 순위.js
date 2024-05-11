function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;
  let zeroCount = 0;

  win_nums.forEach((num) => (count += lottos.includes(num) ? 1 : 0));
  lottos.forEach((num) => (zeroCount += num === 0 ? 1 : 0));
  
  answer.push(7 - (count + zeroCount));
  if(answer[0] >= 7) answer[0] = 6;
  answer.push(7 - count);
  if(answer[1] >= 7) answer[1] = 6;
  
  return answer;
}