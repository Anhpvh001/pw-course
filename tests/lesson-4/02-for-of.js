const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
let newStr = [];
for(i of str){
    console.log(i);  
}
for(i of str){
    newStr.unshift(i);
}
console.log(newStr);
let a = 1;
let idx = 0;
let firstIdx = -1;
let lastIdx = -1;

for (const value of arr) {
    if (value === 3) {
        if(firstIdx === -1){
            firstIdx = idx;
        }
        lastIdx = idx;
    }
    idx++;
}
console.log(`vị trí đầu tiên và cuối cùng của giá trị 3 trong arr lần lượt là:${firstIdx} và ${lastIdx} `)
let newArr=[];
for (const value of dupArr) {
    if (dupArr.indexOf(value) === dupArr.lastIndexOf(value)) {
        newArr.push(value);
    }
}
console.log(newArr);
for(std in student){
    console.log(std);
    console.log(student[std]);
}
let sumAge = 0;
let sumSalary = 0;
for(const std in student){
    if(std === "age"){
        sumAge += student[std];
    }
    if(std === "salary"){
        sumSalary += student[std];
    }
}
console.log(`Tổng các giá trị số trong student: ${sumAge + sumSalary}`);
let arrayStudent = [];
for(std in student){
    arrayStudent.push(std);
}
console.log(arrayStudent);
 