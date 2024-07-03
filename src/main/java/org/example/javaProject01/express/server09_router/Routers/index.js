const express = require("express");
const router = express.Router();

//App.js 를 통해서 req 가 전달되어 오고있으므로 app.get() 등을 쓸 필요가 업음
// cost app - express(); X
// App.js 와 연결되기 위해 라우터 기능(router)은 이용

// app.get() x
// app.post() x

router.get("/", (req, res)=>{
    res.send("<h1>Hello, Express router - index - '/'</h1>");
});

router.get("/about", (req, res)=>{
    res.send("<h1>Hello, Express router - index - '/about'</h1>");
});

module.exports = router;