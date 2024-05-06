// function solution(s) {
//   let splittedStr = s.split("");
//   let answer = splittedStr.map((cur, idx) => {
//     let newArr = splittedStr.slice(0, idx).reverse();
//     let index = newArr.indexOf(cur);
//     return index === -1 ? -1 : index + 1;
//   });
//   return answer;
// }

function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}