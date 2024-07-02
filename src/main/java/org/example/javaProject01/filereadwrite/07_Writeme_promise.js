const fs = require("fs").promises;

// fs.writeFile("./WriteMe2.txt", "안녕하세요\n반갑습니다")
// .then(()=>{
//     return fs.readFile("./WriteMe2.txt"); // 쓴 파일을 콘솔창에서도 출력하고 싶다? 이것도 프로미스 이용
// })
// .then((data)=>{
//     console.log(data.toString());
// })
// .catch((err)=>{
//     console.error(err);
// })
// .finally(()=>{

// })

// 비동기식 -> 동기식

async function abcd(){
    try{
        await fs.writeFile("./WriteMe3.txt", "안녕하세요\n반갑습니다\n어서오세요");
        const result = await fs.readFile("./WriteMe3.txt");
        console.log(result.toString());
    }catch(err){
        console.error(err);
    }
}

abcd();