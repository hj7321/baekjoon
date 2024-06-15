function solution(n) {
  let targetNum = n;
  let binaryStr = "";
  while (n >= 1) {
    binaryStr += String(n % 2);
    n = parseInt(n / 2);
  }
  const oneCount = binaryStr.match(new RegExp("1", "g")).length;

  while (true) {
    let num = ++targetNum;
    binaryStr = "";
    while (num >= 1) {
      binaryStr += String(num % 2);
      num = parseInt(num / 2);
    }
    if (binaryStr.match(new RegExp("1", "g"))?.length === oneCount) break;
  }
  return targetNum;
}