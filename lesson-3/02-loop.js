let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

for (let i = 2; i < 10; i++) {
    console.log(`bảng cứu chương ${i}:`)
    for (let j = 1; j <= 10; j++) {
        console.log(i * j);
    }
}
let array = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
        array.push(i);
    }
}
for(let i = 1; i <= 10; i++){
    console.log(`user${i}@gmail.com`);
}
let revenue = [
    { month: 1, total: 120 },
    { month: 2, total: 136 },
    { month: 3, total: 180 },
    { month: 4, total: 115 },
    { month: 5, total: 94 },
    { month: 6, total: 204 },
    { month: 7, total: 175 },
    { month: 8, total: 137 },
    { month: 9, total: 161 },
    { month: 10, total: 145 },
    { month: 11, total: 190 },
    { month: 12, total: 200 }
];
let total = 0;
for(let item of revenue){
    total += item.total;
}
console.log(total);