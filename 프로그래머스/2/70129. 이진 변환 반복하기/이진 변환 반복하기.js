function solution(s) {
  let changeCnt = 0;
  let zeroCnt = 0;
  let str = s;

  while (str !== "1") {
    changeCnt++;
    zeroCnt += str.match(new RegExp("0", "g"))?.length ?? 0;
    let arr = str.split("").sort((a, b) => a - b);
    let firstOneIdx = arr.indexOf("1");
    num = str.slice(firstOneIdx)?.length ?? 0;

    let binaryStr = "";
    while (num >= 1) {
      binaryStr += String(num % 2);
      num = parseInt(num / 2);
    }
    str = binaryStr.split("").reverse().join("");
  }

  return [changeCnt, zeroCnt];
}