const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com"
const lastName = fullName.substring(0, 6);
console.log(lastName);
const year = date.substring(0, 4);
console.log(year);
const domain = email.substring(email.indexOf("@") + 1);
console.log(domain);