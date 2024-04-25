function solution(phone_number) {
    let newStr = "";
    for(let i = 0; i < phone_number.length - 4; i++) {
        newStr += "*";
    }
    for(let i = phone_number.length - 4; i < phone_number.length; i++) {
        newStr += phone_number[i];
    }
    return newStr;
}