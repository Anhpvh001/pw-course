const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
numbers.forEach((value, index) => {
    console.log(`${index} : ${value}`);
})
let sum = 0;
let min = numbers[0];
let max = numbers[0];
numbers.forEach((num) => {
    sum += num;
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
});
console.log("Sum: "+sum);
console.log("số lớn nhất: "+ max);
console.log("số nhỏ nhất: "+ min);