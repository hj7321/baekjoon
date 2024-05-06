function solution(strings, n) {
  return strings
    .map((str) => str[n] + str)
    .sort()
    .map((str) => str.replace(str[0], ""));
}