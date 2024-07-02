const express = require("express");
const path = require("path");
const app = express();


app.set("port", process.env.PORT || 3000); // process.env.PORT 시스템 포트번호

app.get("/", (req, res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/index.html"));
});




app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 서버 오픈!!")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 
