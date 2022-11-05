//Given a non-negative integer (atmost 10 digits), 
//find the sum of digits with alternating signs

const sumOfAlternatingSignDigits = (num) => {
    const strNumArr = num.toString().split("");
    let sum = 0;
    for(let i=0; i<strNumArr.length; i++){
        if(i % 2 ===0){
            sum +=parseInt(strNumArr[i]);
        }else{
            sum -=parseInt(strNumArr[i]);
        }
    }
    return sum;
}
const res = sumOfAlternatingSignDigits(53178);
console.log(res);