const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer")
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require('dotenv');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("port", process.env.PORT || 3000); // process.env.PORT 시스템 포트번호
dotenv.config();

// static 폴더 설정
app.use("/", express.static(path.join(__dirname, "public"))); //일반 static 폴더 설정
app.use("/img", express.static(path.join(__dirname, "uploads"))); // upload 용 static 설정

// //쿠키 파서 사용을 위한 설정
app.use(cookieParser(process.env.COOKIE_SECRET));

// 세션 활용을 위한 설정
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET, // 암호화 코드
    cookie : {
        httpOnly:true,
        secure:false,
    }
}));

const indexRouter = require("./Routers");
const memberRouter = require("./Routers/members");
const boardRouter = require("./Routers/boards");

app.use("/", indexRouter);
app.use("/members", memberRouter);
app.use("/boards", boardRouter);


// 5. 404 에러 처리
// 위의 모든 라우터를 검색하다가 해당 라우터가 없어서 현재 미들웨어를 만나면 404에러가 발생한 것이므로, 이 미들웨어는
// 맨 아래 또는 에러처리 라우터 바로 위에 위치시킵니다.
app.use((req, res, next)=>{
    // res.send("비정상적 접근~!! 에러입니다~~!!");
    console.log(404);
    res.send("404 에러입니다."); // 400과 500은 위험
});


//4. 에러처리 라우터
app.use((err, req, res, next)=>{
    console.error(err);
    // res.status(200).send("에러내용을 브라우져에 알려주지 않으리");
});


app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 포트 서버 오픈")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 