function solution(n) {
    let result = 1;
    if(n === 0) return 0;
    if(n === 1) return 1;
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) result += i;
    }
    return result;
}