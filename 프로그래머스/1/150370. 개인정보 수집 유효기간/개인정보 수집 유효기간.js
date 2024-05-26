function solution(today, terms, privacies) {
  const result = [];
  const todayArr = today.split(".");
  const newTerms = terms.map((cur) => cur.split(" "));

  privacies.forEach((cur, idx) => {
    const curArr = cur.split(" ");
    curArr[0] = curArr[0].split(".");
    newTerms.forEach((ele) => {
      if (ele[0] === curArr[1]) {
        curArr[0][1] = +curArr[0][1] + +ele[1];
        if (curArr[0][1] >= 13) {
          curArr[0][0] = +curArr[0][0] + Math.ceil(curArr[0][1] / 12) - 1;
          curArr[0][1] = curArr[0][1] % 12 || 12;
        }
        if (
          curArr[0][0] < todayArr[0] ||
          (curArr[0][0] == todayArr[0] && curArr[0][1] < todayArr[1]) ||
          (curArr[0][0] == todayArr[0] &&
            curArr[0][1] == todayArr[1] &&
            curArr[0][2] <= todayArr[2])
        )
          result.push(idx + 1);
      }
    });
  });
  return result;
}