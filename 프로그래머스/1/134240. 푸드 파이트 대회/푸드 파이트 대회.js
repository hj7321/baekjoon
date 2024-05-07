function solution(food) {
  let answer = [0];
  for (let i = food.length - 1; i > 0; i--) {
    let num = Math.floor(food[i] / 2);
    for (let j = 1; j <= num; j++) {
      answer.push(i);
      answer.unshift(i);
    }
  }
  return answer.join("");
}

