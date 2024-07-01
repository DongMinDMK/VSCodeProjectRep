// 05_Readme_promise.js

// 파일 입출력을 위한 모듈의 promise 포함하여 로딩합니다.
const fs = require("fs").promises;
// fs 안에 readFile 함수 안에 Promise 객체를 리턴하는 기능이 담겨있는걸 이용하겠다는 뜻


const pm = fs.readFile("./ReadMe.txt");

// console.log("파일 리딩 시작");


// pm
// .then((data)=>{
//     console.log(data.toString());
// })
// .catch((err)=>{
//     console.error(err);
// })
// .finally(()=>{

// });

// fs.readFile("./ReadMe.txt")
// .then()
// .catch()
// .finally();

// console.log("파일 리딩 종료"); // 파일 리딩 종료가 promise 객체보다 더 빨리끝났다. 비동기식


// 비동기식을 동기식으로 변환

async function abcd(){
    try{
        console.log("파일 리딩 시작2");
        const result = await fs.readFile("./ReadMe.txt");
        console.log(result.toString());
        console.log("파일 리딩 종료2");
    }catch(err){
        console.error(err);
    }
}

abcd();