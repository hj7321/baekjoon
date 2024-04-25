function solution(n) {
    let result = 0;
    let i = 0;
    while(i <= n) {
        result += i % 2 ? 0 : i
        i++;
    }
    return result;
}