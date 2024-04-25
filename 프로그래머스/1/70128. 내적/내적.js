function solution(a, b) {
    let sum = 0;
    a.forEach((num, idx) => {
        sum += num * b[idx];
    })
    return sum;
}