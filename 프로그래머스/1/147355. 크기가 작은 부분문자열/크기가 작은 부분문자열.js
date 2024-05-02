function solution(t, p) {
    let answer = 0;
    // t를 숫자 하나 하나를 원소로 가지는 배열로 만들까?
    // 아니면 t를 숫자 길이만큼 for문?
    for(let i = 0; i < t.length; i++) {
        let str = t.slice(i, i+(p.length));
        if (str.length === p.length && Number(str) <= Number(p)) answer++;
    }
    return answer;
}