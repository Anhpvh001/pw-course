const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";
const newPhone = phoneNumber.replaceAll(" ",".");
console.log(newPhone);
const newReport = report.replaceAll("lỗi","bug");
console.log(newReport);
const newNumberStr = numbersStr.replaceAll(",",".");
console.log(newNumberStr);