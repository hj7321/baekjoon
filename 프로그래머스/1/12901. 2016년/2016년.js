function solution(a, b) {
  let answer = "";
  let day = b;
  switch(a - 1) {
    case 0: break;
    case 11: day += 30;
    case 10: day += 31;
    case 9: day += 30;
    case 8: day += 31;
    case 7: day += 31;
    case 6: day += 30;
    case 5: day += 31;
    case 4: day += 30;
    case 3: day += 31;
    case 2: day += 29;
    case 1: day += 31;
  }
  switch(day % 7) {
    case 0:
      answer = "THU";
      break;
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
  }

  return answer;
}