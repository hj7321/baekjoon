function solution(arr, divisor) {
    let newArr = arr.filter(num => !(num % divisor)).sort((a, b) => a - b);
    return newArr.length ? newArr : [-1];
}