function solution(survey, choices) {
  let answer = "";
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.reduce((_, cur, idx) => {
    if (cur < 4) {
      obj[survey[idx][0]] += Math.abs(cur - 4);
    } else if (cur > 4) {
      obj[survey[idx][1]] += cur - 4;
    }
  }, 0);

  if (obj.R >= obj.T) answer += "R";
  else answer += "T";
  if (obj.C >= obj.F) answer += "C";
  else answer += "F";
  if (obj.J >= obj.M) answer += "J";
  else answer += "M";
  if (obj.A >= obj.N) answer += "A";
  else answer += "N";

  return answer;
}