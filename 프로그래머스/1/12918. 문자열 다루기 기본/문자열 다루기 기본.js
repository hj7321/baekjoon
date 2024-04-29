function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for(let i = 0; i < s.length; i++) {
      if(Number(s[i]) >= 0 && Number(s[i]) <= 9) continue;
      return false;
    }
    return true;
  } 
  return false;
}