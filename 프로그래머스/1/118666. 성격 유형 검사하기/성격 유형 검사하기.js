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

  choices.forEach((cur, idx) => {
    if (cur < 4) {
      obj[survey[idx][0]] += Math.abs(cur - 4);
    } else if (cur > 4) {
      obj[survey[idx][1]] += cur - 4;
    }
  });

  answer += obj.R >= obj.T ? "R" : "T";
  answer += obj.C >= obj.F ? "C" : "F";
  answer += obj.J >= obj.M ? "J" : "M";
  answer += obj.A >= obj.N ? "A" : "N";

  return answer;
}