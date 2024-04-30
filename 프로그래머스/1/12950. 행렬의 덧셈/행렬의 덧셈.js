function solution(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i].map((_, idx) => arr1[i][idx] + arr2[i][idx]));
  }
  return newArr;
}