const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require('dotenv');

const app = express();
app.set("port", process.env.PORT || 3000); // process.env.PORT 시스템 포트번호
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//쿠키 파서 사용을 위한 설정
app.use(cookieParser());

// 세션 활용을 위한 설정
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: process.env.SESSION_SECRET, // 암호화 코드
}));

app.get("/", (req, res)=>{
    // http 서버에서는 파일을 읽어서 내용을 전송하지만
    // express 서버에서는 파일을 직접 전송합니다.
    // http 서버는 상대 경로로 파일을 선택하지만
    // express 서버는 절대 경로로 파일을 선택합니다.

    // console.log(__dirname);

    if(req.cookies.session){
        res.send(`<h2>${req.session[req.cookies.session]}님 반갑습니다.</h2><a href="/logout">로그아웃</a>`);
    }else{
        res.sendFile(path.join(__dirname, '/index.html'));
    }
    
    // __dirname : 현재 파일의 경로
    // __filename : 현재 작성중인 파일의 이름
    // path.join() : 컴마로 구분해서 경로와 경로, 경로와 파일을 조합하는 함수
});


app.post("/login", (req, res)=>{
    const userid = req.body.userid;
    const pwd = req.body.pwd;

    if(userid == "scott" && pwd == "1234"){
        // 고유키를 하나 발생해서 세션에 저장할 키값으로 사용하고 세션 userid 를 저장
        // 그리고 쿠키에 고유키를 session 이라는 이름으로 저장

        // 익스프레스 서버에서 세션의 접근은 쿠키와 마찬가지로 req.session 으로 접근합니다.
        // 저장형태는 key:value 형태의 객체형으로 여러 값들을 저장하고 유지 시킬 수 있습니다.
        // 지우거나 서버가 종료될 때 까지 또는 제한수명이 다할 때까지 유지가능

        const uniqueInt = Date.now();
        req.session[uniqueInt] = userid;

        res.cookie("session", uniqueInt, {httpOnly:true, path:"/"});
        res.json({message:"OK"});

    }else if(userid != "scott"){
        res.json({message:"없는 아이디입니다."});
        // res.end(JSON.stringify({message:"없는 아이디입니다."})); <---- http 웹서버 사용시
    }else if(pwd != "1234"){
        res.json({message:"비밀번호가 맞지 않습니다."});
    }
});

app.get("/logout", (req, res)=>{
    res.clearCookie("session", req.cookies.session, {httpOnly:true, path:"/"});
    res.redirect("/");
});

app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 포트 서버 오픈")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 