const express = require("express");
const router = express.Router();
const path = require("path");
const mysql = require("mysql2/promise");
const multer = require("multer");
const fs = require("fs");


async function getConnection(){
    let connection = await mysql.createConnection(
        {
            host:"localhost",
            user:"root",
            password:"adminuser",
            database:"board"
        }
    );
    return connection;
}

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

router.get("/boardList", (req, res)=>{
    res.sendFile(path.join(__dirname, "/..", "/views/boardList.html"));
});

router.get("/boards", async(req, res)=>{
    const sql = "select* from board order by num desc";

    try{
        const connection = await getConnection();
        const[rows, fields] = await connection.query(sql);

        res.send(rows);
    }catch(err){
        next(err);
    }
});

router.get("/boardWriteForm", (req, res)=>{
    res.sendFile(path.join(__dirname, "/..", "/views/boardWriteForm.html"));
});

router.post("/imageup", multerObj.single("image"), async(req, res)=>{
   const image = req.file.originalname;
   const savefilename = req.file.filename;

   res.json({image, savefilename});
});

const upObj = multer();


router.post("/insertBoard", upObj.single("image"), async(req, res, next)=>{
    const {userid, pwd, email, title, content, image, savefilename} = req.body;

    const sql = "insert into board(userid, pass, email, title, content, image, savefilename) values(?,?,?,?,?,?,?)";

    try{
        const connection = await getConnection();
        const[result, fields] = await connection.query(sql, [userid, pwd, email, title, content, image, savefilename]);
    
        res.json({message:"OK"});
    }catch(err){
        next(err);
    }
});


router.get("/boardView/:num", async(req, res, next)=>{
    const sql = "update board set readcount = readcount+1 where num=?";

    req.session.num = req.params.num; // 세션에 게시물 번호 넣어놓기

    try{
        const connection = await getConnection();
        const[result, fields] = await connection.query(sql, [req.params.num]);
    
        res.sendFile(path.join(__dirname, "/..", "/views/boardView.html"));
    }catch(err){
        next(err);
    }    
});

router.get("/getBoard", async(req, res, next)=>{
    const num = req.session.num;
    const sql = "select* from board where num=?";

    try{
        const connection = await getConnection();
        const[rows, fields] = await connection.query(sql, [num]);
    
        res.send(rows[0]);
    }catch(err){
        next(err);
    }   

});

router.get("/updateBoardForm", (req, res)=>{
    res.sendFile(path.join(__dirname, "/..", "/views/updateBoardForm.html"));
});


module.exports = router;