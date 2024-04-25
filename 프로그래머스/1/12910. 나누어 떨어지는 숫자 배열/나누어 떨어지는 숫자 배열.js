function solution(arr, divisor) {
    let newArr = arr.filter(num => !(num % divisor)).sort((a, b) => a - b);
    newArr.length ? newArr : newArr.push(-1);
    return newArr;
}