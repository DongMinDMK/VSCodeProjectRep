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

module.exports = router;