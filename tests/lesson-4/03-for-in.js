const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
for (let st in student) {
    console.log(st);
    console.log(student[st]);
}
let sumSalary = 0;
let sumAge = 0;
for (let st in student) {
    console.log(st);
    console.log(student[st]);
}
for (let st in student) {
    if (st === "salary") {
        sumSalary += student[st];
    }
    if (st === "age") {
        sumAge += student[st];
    }
}
console.log(`tổng các chỉ số trong student: ${sumAge + sumSalary}`);
let arrayStudent = [];
for (let st in student) {
    arrayStudent.push(st);
}
console.log(arrayStudent);