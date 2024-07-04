const express = require("express");
const router = express.Router();
const path = require("path");
const mysql = require("mysql2/promise");


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



router.post("/login", async(req, res, next)=>{
    const {userid, pwd} = req.body;

    const sql = "select* from member where userid=?";

    try{
        const connection = await getConnection();
        const[rows, fields] = await connection.query(sql, [userid]);

        if(rows.length == 1){
            if(rows[0].pwd == pwd){
                const uniqueInt = Date.now();
                req.session[uniqueInt] = rows[0];
                res.cookie("session", uniqueInt, {httpOnly:true, path:"/"});
                res.json({msg:"OK"});
            }else{
                res.json({msg:"비밀번호가 맞지 않습니다."}); 
            }
        }else{
            res.json({msg:"아이디가 없습니다."});
        }


    }catch(err){
        next(err);
    }
});

router.get("/joinForm", (req,res)=>{
    res.sendFile(path.join(__dirname, "/..", "/views/joinForm.html"));
});

router.post("/idcheck", async(req, res, next)=>{
    const userid = req.body.userid;

    const sql = "select* from member where userid=?";

    try{
        const connection = await getConnection();
        const[rows, fields] = await connection.query(sql, [userid]);

        if(rows.length > 0){
            res.send({id:"1"}); //사용불가능
        }else{
            res.send({id:"0"}); //사용가능
        }
    }catch(err){
        next(err);
    }
});

router.post("/join", async(req, res, next)=>{
    const {userid, pwd, name, email, phone} = req.body;

    const sql = "insert into member(userid, pwd, name, email, phone) values(?,?,?,?,?)";

    try{
        const connection = await getConnection();
        const[rows, fields] = await connection.query(sql, [userid, pwd, name, email, phone]);

        res.json({message:"회원가입이 정상적으로 완료되었습니다. 로그인하세요..."});
    }catch(err){
        res.json({msg:"회원가입에 오류가 발생하였습니다. 관리자에게 문의하세요.."});
        next(err);
    }
});

router.get("/updateMemberForm", async(req, res)=>{
    res.sendFile(path.join(__dirname, "/..", "/views/updateMemberForm.html"));
});

router.post("/updateMember", async(req, res, next)=>{
    const {userid, pwd, name, email, phone} = req.body;

    const sql = "update member set pwd=?, name=?, email=?, phone=? where userid=?";

    try{
        const connection = await getConnection();
        const[rows, fields] = await connection.query(sql, [pwd, name, email, phone, userid]);

        req.session[req.cookies.session] = {userid, pwd, name, email, phone};

        res.json({message:"성공적으로 수정이 완료되었습니다."});
    }catch(err){
        next(err);
    }
});

router.get("/logout", (req, res)=>{
    delete req.session[req.cookies.session];
    res.clearCookie("session", req.cookies.session, {httpOnly:true, path:"/"});
    res.redirect("/");
});

router.delete("/deleteMember/:userid", async(req, res, next)=>{
    const {userid} = req.params;

    const sql = "delete from member where userid=?";

    try{
        const connection = await getConnection();
        const[result, fields] = await connection.query(sql, [userid]);

        res.send("OK");
    }catch(err){
        next(err);
    }
});

module.exports = router;