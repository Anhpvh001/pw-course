function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 6);
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log(min);
}
findMin(5, 9, 4);
findMin(9, 5, 9);
function getTopStudents(students, threshold) {
    let result = [];
    for (let item of students) {
        if (item.score >= threshold) {
            result.push(item.name);
        }
    }
    return result;
}
let students = [];
students.push({ name: "Linh", score: 8.4 });
students.push({ name: "Vinh", score: 8.8 });
students.push({ name: "Anh", score: 7.0 });
let topStudents = getTopStudents(students, 8.0);
console.log(topStudents);
function calculateInterestest(principal,rate,years){
    return principal + principal*(rate*years/100);
}
console.log(calculateInterestest(1000000,10,1));