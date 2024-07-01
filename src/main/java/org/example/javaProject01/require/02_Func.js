const {odd, even} = require("./Var");

function checkOddOrEven(number){
    if(number%2){
        return odd;
    }else{
        return even;
    }
}

// console.log("함수 실행 결과 : " + checkOddOrEven(25));

console.log("-----------------------------------------------------------------");

module.exports = checkOddOrEven;

// module.exports = (number)=>{ // 방법 #2
//     if(number % 2){
//         return odd;
//     }else{
//         return even;
//     }
// }