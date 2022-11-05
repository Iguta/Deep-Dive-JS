//Given a non-negative integer (atmost 10 digits), 
//find the sum of digits with alternating signs.
const isMultipleofThree = (strNum) => {
    if(strNum[0]==="0" && parseInt(strNum)%3 === 0){
        return true;
    }
}
const countOfMultiplesOfThree = (num) => {
    let count = 0;
    let strNum = num.toString();
    //taking care of single digits substrings
    for(let i=0; i<strNum.length; i++){
        isMultipleofThree(strNum[i]) && count++;
    }
    //taking care of a combination of substrings
    let substr ="";
    for(let i=0; i<strNum.length; i++){
        for(let j=i+1; j<strNum.length; j++){
            substr = strNum.slice(i, j+1);
            isMultipleofThree(substr) && count++;
            console.log(substr);
        }
        substr="";
    }
    console.log("count", count);
};
countOfMultiplesOfThree(103);