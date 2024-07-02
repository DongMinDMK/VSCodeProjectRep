const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// 쿠키 파서를 위한 사용 설정
app.use(cookieParser());

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"abcd",
}))

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res)=>{
    const name = req.cookies.name;
    
    if(name){
        res.send(`<h2>${decodeURIComponent(name)} 님 안녕하세요</h2><a href="/logout">로그아웃</a>`);
    }else{
        res.sendFile(path.join(__dirname, "/index.html"));
    }
});

app.post("/login", (req, res)=>{
    const name = req.body.name;
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 1);

    res.cookie("name", encodeURIComponent(name), {expires:expires, httpOnly:true, path:"/"});
    res.redirect("/");
})

app.get("/logout", (req, res)=>{
    res.clearCookie("name", encodeURIComponent(req.cookies.name),{httpOnly:true, path:"/"});
    res.redirect("/");
});

//로그인을 하면 로그인 한 이름을 쿠키에 저장하고 그 저장한 이름을 보여주고, 로그아웃까지 완료

app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 서버 실행!!")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 