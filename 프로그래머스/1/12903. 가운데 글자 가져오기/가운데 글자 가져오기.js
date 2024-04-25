function solution(s) {
    let len = s.length;
    return len % 2 ? s[Math.floor(len / 2)] : s[len / 2 - 1] + s[len / 2]
}