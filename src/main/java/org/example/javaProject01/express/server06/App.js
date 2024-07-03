const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
app.set("port", process.env.PORT || 3000); // process.env.PORT 시스템 포트번호

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//쿠키 파서 사용을 위한 설정
app.use(cookieParser());

// 세션 활용을 위한 설정
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"abcd", // 암호화 코드
}));


app.get("/", (req, res)=>{
    // http 서버에서는 파일을 읽어서 내용을 전송하지만
    // express 서버에서는 파일을 직접 전송합니다.
    // http 서버는 상대 경로로 파일을 선택하지만
    // express 서버는 절대 경로로 파일을 선택합니다.

    // console.log(__dirname);
    if(req.cookies.userid){
        res.send(`<h2>${req.cookies.userid}님 반갑습니다.</h2><a href="/logout">로그아웃</a>`);
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

    console.log(userid, pwd);

    if(userid == "scott" && pwd == "1234"){
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 1);

        //userid 이라는 이름으로 전송된 이름을 쿠키에 저장
        res.cookie("userid", userid, {expires:expires, httpOnly:true, path:"/"});
        res.json({message:"OK"});
    }else if(userid != "scott"){
        res.json({message:"아이디가 존재하지 않습니다."});
    }else if(pwd != "1234"){
        res.json({message:"비밀번호가 일치하지 않습니다."});
    }
});

app.get("/logout", (req, res)=>{
    res.clearCookie("userid", req.cookies.userid, {httpOnly:true, path:"/"});
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