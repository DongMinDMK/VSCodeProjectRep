console.log(123 + "abcd");
console.log(123, "abcd");

process.stdout.write(123+"abcd");
process.stdout.write(123+"abcd");

console.log();

console.log("정수 : " + 273);
console.log("실수 : " + 3.123);

console.log("-------------------------------------------");

console.log("27 + 35 = " + (27 + 35));
console.log("27 - 35 = " + (27 - 35));
console.log("27 * 35 = " + (27 * 35));
console.log("27 ÷ 35 = " + (27 / 35));
console.log("27 % 35 = " + (27 % 35));

console.log("-------------------------------------------");

console.log("27 > 35 = " + (27 > 35)); //false
console.log("27 == '27' = " + (27 == '27')); // true
console.log("27 === '27' = " + (27 === '27')); // false
console.log("27 != '27' = " + (27 != '27')); // false

console.log("-------------------------------------------");


console.log("52 > 135 && 45 < 78 => " + (52 > 135 && 45 < 78));