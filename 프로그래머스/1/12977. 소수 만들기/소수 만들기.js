function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let total = nums[i] + nums[j] + nums[k];
        let prime = 0;
        for (let i = 2; i < total; i++) {
          if (total % i === 0) break;
          else prime++;
        }
        prime === total - 2 ? answer++ : answer;
      }
    }
  }

  return answer;
}