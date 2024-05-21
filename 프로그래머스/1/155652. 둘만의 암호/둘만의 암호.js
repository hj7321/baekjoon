function solution(s, skip, index) {
  const skipArr = skip.split("").map((ele) => ele.charCodeAt());
  const sArr = s.split("").map((ele) => ele.charCodeAt());
  const resultArr = sArr.map((ele) => {
    for (let i = 1; i <= index; i++) {
      ++ele;
      if ("z".charCodeAt() < ele) ele = "a".charCodeAt();
      while (skipArr.includes(ele)) {
        ++ele;
        if ("z".charCodeAt() < ele) ele = "a".charCodeAt();
      }
    }
    return String.fromCharCode(ele);
  });
  return resultArr.join("");
}