const express = require("express");
const path = require("path");
const app = express();

// 파라미터와 json 형식의 사용을 위한 설정 - 전달되어 지는 파라미터를 json 형식의 객체로 바로바로 바꿔주는 사용하는 설정(즉 밑에 req.body 를 사용하려면 이 밑에 2줄을 작성해야한다.)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
});

// app.get("/category/boots", (req, res)=>{
//     res.send("<h2>Hello Boots!! </h2>");
// })

// url의 일부 값을 저장할 변수로 라우터를 구성합니다.
// kind : Wild Card Character

// url 에 파라미터를 태워서 보내는 예
// 와일드 카드 키워드를 사용한 라우터는 범위가 넓으므로 가능한
// 아래쪽에 위치시켜서, 명확한 구분은 먼저 실행되게 하고,
// 해당 라우터가 없을 때 실행되게 하는 것이 효과적입니다.

app.post("/login", (req, res) => {
    const name = req.body.name;
    console.log(name);
    const pwd = req.body.pwd;
    console.log(pwd);
    console.log(req.body);

    res.redirect("/");
});

app.get("/category/:kind", (req, res)=>{
    res.send(`<h2>Hello Wild Card Char ${req.params.kind}</h2>`)
});



app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 서버 오픈!!")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 

