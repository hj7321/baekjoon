// function solution(n, lost, reserve) {
//   let resultCnt = 0;
//   const lostCopy = [...lost];
//   resultCnt += lost.reduce((count, curNum) => {
//     if (reserve.indexOf(curNum) !== -1) {
//       reserve.splice(reserve.indexOf(curNum), 1);
//       lostCopy.splice(lostCopy.indexOf(curNum), 1);
//       ++count;
//     }
//     return count;
//   }, 0);
//   resultCnt += lostCopy
//     .sort((a, b) => a - b)
//     .reduce((count, curNum) => {
//       if (reserve.indexOf(curNum - 1) !== -1) {
//         ++count;
//         reserve.splice(reserve.indexOf(curNum - 1), 1);
//       } else if (reserve.indexOf(curNum + 1) !== -1) {
//         ++count;
//         reserve.splice(reserve.indexOf(curNum + 1), 1);
//       }
//       return count;
//     }, 0);
//   return n - lost.length + resultCnt;
// }

function solution(n, lost, reserve) {
  let reserveCopy = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);
  const lostCopy = lost
    .filter((l) => !reserve.includes(l))
    .sort((a, b) => a - b);

  return (
    n -
    lostCopy.filter((a) => {
      const b = reserveCopy.find((r) => Math.abs(r - a) === 1);
      if (!b) return true;
      reserveCopy = reserveCopy.filter((r) => r !== b);
    }).length
  );
}