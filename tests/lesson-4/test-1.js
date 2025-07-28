const departurePlanet = "Trái Đất";
const mission = "Khám phá vũ trụ K16";
let crew = ["Nam", "Long", "Tuấn", "Hùng", "Đào", "Lê"];
function launchShip(crew) {
    let nameOfStudents = "";
    for (let i in crew) {
        nameOfStudents += crew[i];
        if (i < crew.length - 1) {
            nameOfStudents += ", ";
        }
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${nameOfStudents} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission}!`;
}
let centralControl = launchShip(crew);
console.log(centralControl);

function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}
let resultDistance = calculateDistance(1000, 24)
console.log(resultDistance);
function convertTimeToHex(time) {
    let result = time.toString(16);
    return result;
}
let resultConvertTimeToHex = convertTimeToHex(120);
console.log(resultConvertTimeToHex);
function isUppercase(ch) {
    return ch === ch.toUpperCase() && ch !== ch.toLowerCase();
}

function decryptCode(code) {
    // Cach 1:
    // let text = [];
    // text = code.split("");
    // for (let i = 0; i < text.length; i++) {
    //     if (isUppercase(text[i])) {
    //         text[i] = text[i].toLowerCase();
    //     } else{
    //         text[i] = text[i].toUpperCase();
    //     }
    // }
    // return text.join("");

    // Cach 2: 
    // return code.split("")
    // .map(m => isUppercase(m) ? m.toLowerCase() : m.toUpperCase())
    // .join("");

    // Cach 3:
    let result = "";
    for (i of code) {
        if (isUppercase(i)) {
            result += i.toLowerCase();
        } else {
            result += i.toUpperCase()
        }
    }
    return result;
}
console.log(decryptCode("K16 Challenge"));
function returnToEarth(){
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();