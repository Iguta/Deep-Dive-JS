function factorial(num){
    console.log("called");
    if (num > 1) {
        return num *= factorial(num - 1);
    }else{
        return 1;
    }
}
console.log(factorial(170));