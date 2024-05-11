function solution(n, m, section) {
  let answer = 1;
  let end = section[0] + (m - 1);
  for (let i = 1; i < section.length; i++) {
    if (end < section[i]) {
      end = section[i] + (m - 1);
      answer++;
    }
  }
  return answer;
}