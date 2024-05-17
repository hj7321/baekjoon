function solution(X, Y) {
  let commonStr = "";

  for (let i = 9; i >= 0; i--) {
    const regex = new RegExp(String(i), "g");
    const countX = (X.match(regex) || []).length;
    const countY = (Y.match(regex) || []).length;
    commonStr += String(i).repeat(Math.min(countX, countY));
  }

  if (commonStr === "") return "-1";
  if (commonStr[0] === "0") return "0";
  return commonStr.split("").join("");
}