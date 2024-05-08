function solution(k, score) {
  let arr = [];
  return score.map((s, idx) => {
    arr.push(s);
    arr.sort((a, b) => b - a);
    if (arr.length >= k + 1) {
      arr.splice(k);
      return arr[k - 1];
    } else return arr[idx];
  });
}
