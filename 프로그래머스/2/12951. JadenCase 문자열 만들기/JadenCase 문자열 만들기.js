function solution(s) {
  const arr = s.split(" ");
  const newArr = arr.map((cur) => {
    let newStr = "";
    for (let i = 0; i < cur.length; i++) {
      if (typeof cur[i] === "number") newStr += cur[i];
      else newStr += i === 0 ? cur[i].toUpperCase() : cur[i].toLowerCase();
    }
    return newStr;
  });
  return newArr.join(" ");
}