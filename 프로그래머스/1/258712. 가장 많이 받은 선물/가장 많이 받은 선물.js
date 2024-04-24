function solution(friends, gifts) {
  let answer = 0;
  
  // 주고받은 선물 개수에 대한 2차원 배열 만들기
  let giveAndTake = new Array(friends.length);
  for (let i = 0; i < friends.length; i++) {
    giveAndTake[i] = new Array(friends.length).fill(0);
  }

  // 준 선물, 받은 선물, 선물 지수에 대한 2차원 배열 만들기
  let giftInfo = new Array(friends.length);
  for (let i = 0; i < friends.length; i++) {
    giftInfo[i] = new Array(3).fill(0);
  }

  // gifts 배열에서 준 사람, 받은 사람 인덱스 구해서
  // giveAndTake 배열과 giftInfo 배열에 개수 증가시키기
  gifts.forEach((info) => {
    let [give, take] = info.split(" ");
    let giveIdx = friends.indexOf(give);
    let takeIdx = friends.indexOf(take);
    giveAndTake[giveIdx][takeIdx]++;
    giftInfo[giveIdx][0]++;
    giftInfo[takeIdx][1]++;
  });

  // giftInfo 배열의 선물 지수 구하기
  for (let i = 0; i < friends.length; i++) {
    giftInfo[i][2] = giftInfo[i][0] - giftInfo[i][1];
  }

  // 다음 달에 받을 선물 개수 입력하는 배열 만들기
  let howManyTake = new Array(friends.length).fill(0);

  // 선물 주고받은 수 비교하기
  for(let i = 0; i < friends.length - 1; i++) {
    for(let j = i+1; j < friends.length; j++) {
      if(giveAndTake[i][j] > giveAndTake[j][i]) howManyTake[i]++;
      else if(giveAndTake[i][j] < giveAndTake[j][i]) howManyTake[j]++;
      else {
        if(giftInfo[i][2] > giftInfo[j][2]) howManyTake[i]++;
        else if(giftInfo[i][2] < giftInfo[j][2]) howManyTake[j]++;
      }
    }
  }

  answer = Math.max(...howManyTake);

  return answer;
}
