function solution(array, commands) {
  return commands.reduce((acc, cur, idx) => {
    let arr = array.slice(cur[0] - 1, cur[1]).sort((a, b) => a - b);
    acc[idx] = arr[cur[2] - 1];
    return acc;
  }, []);
}