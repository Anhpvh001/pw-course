const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

const expenses = [50, 100, 150];
let sc = scores.map(sc => {
    if( sc < 90){
        return sc += sc * 10/100; 
    }else{
        return sc = sc - 5/100;
    }
})
console.log(sc);
const numbers = [1, 2, 3];
const strNumbers = numbers.map(num => num.toString());
console.log(strNumbers); 
const newNumbers = numbers.map(number => number*2);
console.log(newNumbers); 