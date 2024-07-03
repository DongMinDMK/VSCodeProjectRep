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

module.exports = router;