function solution(sizes) {
  let longArr = [];
  let shortArr = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      longArr.push(sizes[i][0]);
      shortArr.push(sizes[i][1]);
    } else {
      longArr.push(sizes[i][1]);
      shortArr.push(sizes[i][0]);
    }
  }
  return Math.max(...longArr) * Math.max(...shortArr);
}