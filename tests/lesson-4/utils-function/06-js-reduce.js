const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

let sum = scores.reduce((total, sc) => total + sc, 0);
console.log(sum);
let sum1 = numbers.reduce((total, nb) => total * nb, 1);
console.log(sum1);
let sum2 = expenses.reduce((total, ex) => total + ex, 0);
console.log(sum2);