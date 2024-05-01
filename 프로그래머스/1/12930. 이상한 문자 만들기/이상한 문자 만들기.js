function solution(s) {
  let newStr = "";
  let arr = s.split(" ");
  arr.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) newStr += str[i].toUpperCase();
      else newStr += str[i].toLowerCase();
    }
    newStr += " ";
  });
  return newStr.slice(0, newStr.length-1);
}