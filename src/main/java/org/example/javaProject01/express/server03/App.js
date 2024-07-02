const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);

// 라우터 : app.get() 또는 app.post() 등 ...
// 미들웨어 : 라우터 안에 있는 익명 함수
// req 가 요청을 받아서 미들웨어를 실행하고, 그안에서 res 로 응답

// 1. req 가 요청받은 url 없이, 미들웨어만 실행하기 위한 라우터가 있습니다.
// 모든 라우터들이 실행되기 전 공통코드가 실행되는 라우터 : app.use();
// 보통 다른 라우터들의 위쪽에 작성합니다.
// 모든 라우터들이 실행되기 전 실행의 대상으로 인식됩니다.
// 서버에서 각 url 별로 해야할 일들 이외에 공통으로 작업해야 하는 일이 있다면 여기에 작성합니다.

app.use((req, res, next)=>{
    console.log("모든 요청에 실행됩니다.");

    // 공통실행 라우터를 포함 모든 라우터는 해당 미들웨어 실행 후 종료됩니다.
    // 다음 라우터로 이동하지 않는 것이 보통입니다.
    // 공통 실행 라우터는 자신도 실행하고 해당 URL 의 라우터도 실행하게 하기위해, 매개변수 next()를 넣고, 익명함수 끝에
    // next() 함수를 호출하여 다음 코드들이 실행되게 이어줍니다.
    next();

    // 모든 라우터에 next 가 있지만, 사용하지 않아서 생략된 상태입니다.
    // url 을 포함한 라우터를 다른 곳으로 이동할 필요가 없어서 사용하지 않을 뿐입니다.
    // 필요하면 꺼내서 사용할 수 있습니다.
    // next()가 없으면 현재 미들웨어 라우터에서 요청에 대한 응답이 종료됩니다. 더이상 이동하지 않습니다.
    // 공통코드 미들웨어를 위한 라우터는 반드시 next() 를 사용해주세요.
});

//2. 특정 url 에서만 실행할 공통코드 라우터(이하 미들웨어라고 부르겠습니다.)
app.use("/loginForm", (req, res, next)=>{
    console.log("loginForm 요청에만 실행됩니다.");
    next();
});

// // 3. 에러가 발생했을 때 사용하는 미들웨어도 있습니다.
// //    정상 라우터 또는 공통 미들웨어 실행 중 에러가 발생했을 때
//      app.use((req, res, next)=>{
//     // throw new Error("에러를 발생시켜주마~~");
//     // 현재 코드는 에러의 상세내용이 console 창에도 나오고 브라우저 창에도 나옵니다.
//     try{
//         throw new Error("에러를 발생시켜주마~~");
//     }catch(err){
//         // console.error(err);
//         next(err); // 서버에서 받은 에러 내용을 담고 next로 이동합니다.
//         // next 가 err 를 전달인수로 갖으면 에러 처리 미들웨어로 이동하라는 뜻입니다.
//         // 에러처리 라우터는 보통 현재 서버 프로그래밍의 가장 아래에 기술합니다.

//         // 브라우저에 에러 내용을 나오지 않게 하려면 1차적으로 try-catch문을 이용하고
//         // 두번째로 에러처리 라우터를 만들어서 사용합니다.
//     }
// });

// get 과 post 등 모든 메소드에서 리퀘스트 키워드만 같으면 실행됩니다.
// 실행 후 next() 로 인해 제어권이 아래로 이동하여 해당 get 이나 post 등이 추가 실행됩니다.
// ------------------------------------------------------------------

app.get("/", (req, res)=>{
    // http 서버에서는 파일을 읽어서 내용을 전송하지만
    // express 서버에서는 파일을 직접 전송합니다.
    // http 서버는 상대 경로로 파일을 선택하지만
    // express 서버는 절대 경로로 파일을 선택합니다.
    res.sendFile(path.join(__dirname, "/index.html"));

    // __dirname : 현재 파일의 경로
    // __filename : 현재 작성중인 파일의 이름
    // path.join() : 컴마로 구분해서 경로와 경로, 경로와 파일을 조합하는 함수
});

app.get("/loginForm", (req, res)=>{
    res.sendFile(path.join(__dirname, "/loginForm.html"));
});


//5. 404 에러 처리
// 위의 모든 라우터를 검색하다가 해당 라우터가 없어서 현재 미들웨어를 만나면 404에러가 발생한 것이므로, 이 미들웨어는
// 맨 아래 또는 에러처리 라우터 바로 위에 위치시킵니다.
app.use((req, res, next)=>{
    res.status(404).send("404 에러임~~");
})


// 4. 에러처리 라우터
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(200).send("에러 내용을 브라우져에 띄우지 않도록 합니다.");
});



app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 서버 오픈!!")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다. 