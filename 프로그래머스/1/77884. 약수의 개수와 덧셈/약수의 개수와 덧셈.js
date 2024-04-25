function solution(left, right) {
    // 약수의 개수가 짝수: 제곱수가 아닌 수
    // 약수의 개수가 홀수: 제곱수
    let sum = 0;
    for(let i = left; i <= right; i++) {
        sum += Math.sqrt(i).toString().includes(".") ? i : -i;
    }
    return sum;
}