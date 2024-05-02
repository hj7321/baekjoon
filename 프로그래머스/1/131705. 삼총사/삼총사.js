function solution(number) {
  let answer = 0;
  let n = number.length;
  for(let i = 0; i < n; i++) {
    for(let j = i+1; j < n; j++) {
      for(let k = j+1; k < n; k++) {
        let sum = number[i] + number[j] + number[k];
        if(sum === 0) answer++;
      }
    }
  }
  return answer;
}