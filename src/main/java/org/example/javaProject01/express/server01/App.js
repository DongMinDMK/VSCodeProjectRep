// 여기가 서버 프로그래밍의 시작 부분
// 서버운영을 위해서 Express 모듈을 import 해서 express 객체 변수에 저장

const express = require("express");
const app = express(); //express() 함수를 이용해서 서버운영관련 객체를 변수에 저장

// 익스프레스 서버는 이것만으로도 http 서버의 createServer 와 같은 동작이 되었다라고 할 수 있습니다.

app.set("port", 3000);
// app.set(); : 서버객체의 필드 변수를 추가해서 사용할 수 있습니다.
// 추가되는 변수는 현재파일에서만 사용이 되고, 서버 종료시 소멸됩니다.
// console.log(app.get("port"));


app.get("/", (req, res)=>{
    res.send("<h1>Hello Express~!!</h1>")
});

app.get("/about", (req, res)=>{
    res.send("<h2>Hello this is about page~!!</h2>");
});

app.listen(app.set("port", 3000), ()=>{app.get("port", 3000), console.log("3000번 포트의 익스프레스 서버 가동!")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다.
