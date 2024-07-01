const fs = require("fs");

// fs.readFile("읽어올 파일의 경로와 이름", (err, data)=>{읽어온 파일의 내용처리 함수});
// fs.readFile("./ReadFile.txt", (err,data)=>{});

fs.readFile("./ReadMe.txt", (err, data)=>{
    // err : 파일읽기에 실패했을 때 전달되는 에러내용을 받는 매개변수
    // data : 파일읽기에 성공했을 때 읽어온 파일 내용의 데이터

    if(err){
        console.error(err);
    }else{
        console.log(data);
        console.log(data.toString());
    }
});