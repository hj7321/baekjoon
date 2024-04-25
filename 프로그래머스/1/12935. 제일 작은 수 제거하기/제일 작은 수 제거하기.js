function solution(arr) {
    let newArr = [];
    newArr = arr.filter(num => num !== Math.min(...arr));
    return newArr.length ? newArr : [-1];
}