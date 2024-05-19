function solution(s) {
  let splitCnt = 0;
  let cnt1 = (cnt2 = 0);
  let str = s[0];

  let i = 0;
  while (i < s.length) {
    if (str === s[i + 1]) cnt1 += cnt1 ? 1 : 2;
    else {
      cnt1 += cnt1 ? 0 : 1;
      cnt2++;
    }
    if (cnt1 === cnt2 || i + 1 >= s.length) {
      cnt1 = cnt2 = 0;
      splitCnt++;
      str = s[i + 2];
      i += 2;
    } else i++;
  }

  return splitCnt ? splitCnt : 1;
}