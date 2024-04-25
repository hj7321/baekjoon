function solution(n)
{
    let sum = 0;
    n = String(n);
    for(let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    return sum;
}