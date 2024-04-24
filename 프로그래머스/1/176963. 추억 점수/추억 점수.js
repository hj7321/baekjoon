function solution(name, yearning, photo) {
  // 키(key)를 이름(name), 값(value)을 그리움 점수(yearning)로 하는 객체 정의
  let score = {};
  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  let yearningScore = new Array(photo.length).fill(0); // 그리움 점수 합산 배열

  // photo 배열을 순회하여 각 배열 요소의 그리움 점수 합치기
  // score 객체에서 이름을 찾지 못할 경우: 그리움 점수 0점
  for (let i = 0; i < photo.length; i++) {
    photo[i].forEach((friendName) => {
      if (score[friendName]) yearningScore[i] += score[friendName];
    });
  }

  return yearningScore;
}
