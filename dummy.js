//let obj1 = {name:"David"};
//let obj2 = obj1;
//obj2.name = "Dan";
//obj2.secondName = "Angela"
//console.log(obj2);
//console.log(obj1);

//const obj3 = Object.assign({}, obj1);
//console.log(obj3)
//console.log(obj3===obj1)

var twoSum = function(nums, target){
    const indeces =[]
    const arrayLength = nums.length;
    console.log(arrayLength);
    for(let i=0; i<arrayLength-1; i++){
        for(let j=i+1; j<arrayLength; j++){
            if(nums[i]+nums[j] === target){
                indeces.push(i, j);
                return indeces;
            }
        }
    }
}
 
const arrNums = [2, 7, 11, 15];
const target = 22;
console.log(twoSum(arrNums, target));