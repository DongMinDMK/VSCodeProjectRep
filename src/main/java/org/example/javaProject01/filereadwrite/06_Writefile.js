const fs = require("fs");

fs.writeFile(
    "./WriteMe.txt", 
    "텍스트가 쓰여집니다.", 
    (err)=>{
        console.error(err);
    }
)