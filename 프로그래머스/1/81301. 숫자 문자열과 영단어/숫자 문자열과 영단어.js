function solution(s) {
  const numberArr = [
    ["zero", "0", 4],
    ["one", "1", 3],
    ["two", "2", 3],
    ["three", "3", 5],
    ["four", "4", 4],
    ["five", "5", 4],
    ["six", "6", 3],
    ["seven", "7", 5],
    ["eight", "8", 5],
    ["nine", "9", 4],
  ];
  let newStr = numberArr.reduce((acc, cur) => {
    let startIdx = s.indexOf(cur[0]);
    while (startIdx !== -1) {
      let sliceStr = s.slice(startIdx, startIdx + cur[2]);
      s = s.replace(sliceStr, cur[1]);
      if (s.includes(cur[0])) startIdx = s.indexOf(cur[0]);
      else break;
    }
    acc = s;
    return acc;
  }, "");
  return Number(newStr);
}