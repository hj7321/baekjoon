function solution(answers) {
  let answer = [];

  let stu1 = "12345";
  const pattern1 = 5;
  let stu2 = "21232425";
  const pattern2 = 8;
  let stu3 = "3311224455";
  const pattern3 = 10;
  let n = answers.length;

  let stu1Arr = stu1.repeat(Math.ceil(n / pattern1)).split("");
  let total1 = 0;
  let stu2Arr = stu2.repeat(Math.ceil(n / pattern2)).split("");
  let total2 = 0;
  let stu3Arr = stu3.repeat(Math.ceil(n / pattern3)).split("");
  let total3 = 0;

  for (let i = 0; i < n; i++) {
    if (stu1Arr[i] === String(answers[i])) total1++;
    if (stu2Arr[i] === String(answers[i])) total2++;
    if (stu3Arr[i] === String(answers[i])) total3++;
  }

  let maxTotal = Math.max(total1, total2, total3);
  if (maxTotal === total1) answer.push(1);
  if (maxTotal === total2) answer.push(2);
  if (maxTotal === total3) answer.push(3);

  return answer;
}