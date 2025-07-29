let car = { make: "Toyota", model: "Corolla", year: 2021 }
console.log(car.year);
let person = {
    name: "viet anh",
    address: {
        street: "ngoc hoi",
        city: "ha noi",
        country: "viet nam"
    }
}
console.log(person.address.street)
let student = {
    name: "nam",
    grades: {
        math: 7.0,
        english: 8.5
    }
}
console.log(student["grades"]["math"])
let settings = {
    volume: 30,
    brightness: 70
}
settings.volume = 80;
console.log(settings);
let bike = {};
bike.color = "red";
let employee = {
    name: "cong",
    age: "24"
}
delete employee.age;
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);
