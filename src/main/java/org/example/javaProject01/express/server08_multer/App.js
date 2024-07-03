const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer")
const app = express();

app.set("port", process.env.PORT || 3000); // process.env.PORT 시스템 포트번호


app.use(express.json());
app.use(express.urlencoded({extended:false}));

// static 폴더 설정
app.use("/downloads", express.static(path.join(__dirname, "uploads")));


try{
    fs.readdirSync("uploads");
}catch(err){
    console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
    fs.mkdirSync("uploads");
}

// multer 를 이용해서 업로드를 수행할 객체를 생성합니다.
// const multerObj = multer();
// const multerObj = multer({storage:multer.diskStorage({ destination(){}, filename(){}, }), limits:{}})
const multerObj = multer(
    {
        storage:multer.diskStorage(
            {
                destination(req, res, done){ // 업로드된 파일이 저장될 폴더 설정
                    done(null, "uploads/");
                },

                filename(req, file, done){ // 업로드된 파일이 저장되기 전 파일이름을 변경하는 설정
                    const ext = path.extname(file.originalname);
                    const fn = path.basename(file.originalname, ext) + Date.now() + ext;
                    done(null, fn);
                },
            }
        ),
        limits:{
            fileSize: 5 * 1024 * 1024,
        }
    }
)

app.get("/", (req, res)=>{
    // http 서버에서는 파일을 읽어서 내용을 전송하지만
    // express 서버에서는 파일을 직접 전송합니다.
    // http 서버는 상대 경로로 파일을 선택하지만
    // express 서버는 절대 경로로 파일을 선택합니다.

    // console.log(__dirname);

    res.sendFile(path.join(__dirname, '/multer.html'));
    
    // __dirname : 현재 파일의 경로
    // __filename : 현재 작성중인 파일의 이름
    // path.join() : 컴마로 구분해서 경로와 경로, 경로와 파일을 조합하는 함수
});

app.post("/upload", multerObj.single("image"), (req, res)=>{
   const filename = req.file.filename;
   const title = req.body.title;

   res.json({title, filename});
});


app.listen(app.get("port"), ()=>{console.log(app.get("port"), "익스프레스 포트 서버 오픈")});

// express 서버 구동 순서
// 1. npm init
// 2. npm i express
// 3. npm i nodemon : 개발환경이므로 필수 사항은 아닙니다.
// 4. app.js 또는 index.js 또는 main 에 지정한 파일(서버의 시작파일)을 제작합니다.
// 5. package.json 의 scripts 에 "start" : "nodemon app" 를 추가합니다.
// 6. npm app 또는 npm run start(npm start) 로 서버를 시작합니다.