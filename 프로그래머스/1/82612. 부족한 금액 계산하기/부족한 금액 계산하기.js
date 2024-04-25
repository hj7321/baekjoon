function solution(price, money, count) {
    let totalPrice = 0;
    if(count % 2) {
        totalPrice = price * ((1+count)/2 * count);
    } else {
        totalPrice = price * ((1+count) * count/2);
    }

    return (totalPrice - money > 0) ? totalPrice - money : 0;
}