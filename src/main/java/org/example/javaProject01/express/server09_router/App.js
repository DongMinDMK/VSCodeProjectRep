const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);

const indexRouter = require("./Routers");
const usersRouter = require("./Routers/user");

app.use("/", indexRouter); // '/' 로 시작하는 모든 요청은 indexRouter 로 연결
app.use("/users", usersRouter);

// app.get("/", (req, res)=>{
//     // http 서버에서는 파일을 읽어서 내용을 전송하지만
//     // express 서버에서는 파일을 직접 전송합니다.
//     // http 서버는 상대 경로로 파일을 선택하지만
//     // express 서버는 절대 경로로 파일을 선택합니다.

//     // console.log(__dirname);

//     res.send("<h1>Router 학습</h1>");
//     // res.sendFile(path.join(__dirname, '/fileupload.html'));
// });
// 외부에 생성되고 클라이언트 요청에 응답할 수 있는 router 들을 갖고 있는 파일을 require 합니다.

app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 포트 서버 오픈")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 