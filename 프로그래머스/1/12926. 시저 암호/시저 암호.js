function solution(s, n) {
  let answer = "";
  let ascii = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let changeAscii = s[i].charCodeAt(0) + n;
    let lowerSub = "z".charCodeAt(0) - changeAscii;
    let upperSub = "Z".charCodeAt(0) - changeAscii;

    if (
      s[i].charCodeAt(0) >= "a".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "z".charCodeAt(0) &&
      lowerSub < 0
    )
      ascii = "a".charCodeAt(0) - 1 + (-lowerSub);
    else if (
      s[i].charCodeAt(0) >= "A".charCodeAt(0) &&
      s[i].charCodeAt(0) <= "Z".charCodeAt(0) &&
      upperSub < 0
    )
      ascii = "A".charCodeAt(0) - 1 + (-upperSub);
    else ascii = changeAscii;

    answer += String.fromCharCode(ascii);
  }
  return answer;
}