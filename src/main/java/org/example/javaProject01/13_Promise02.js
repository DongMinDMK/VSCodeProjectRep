let condition = true;

function callPromise(){
    const pm = new Promise((resolve, reject) => {
        if(condition){
            console.log("1:resolve");
            resolve("값1");
        }else{
            console.log("2:reject");
            reject();
        }
    });

    return pm;
}


let pm = callPromise();

pm
.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log("실패");
})
.finally(()=>{
    console.log("프로미스 종료");
});

console.log("종료");

// 비동기식을 동기식으로 바꾸는 방법

async function abcd(){
    
    try{
        let result = await callPromise(); // callPromise() 함수가 온 이후에 결과를 보겠다.
        console.log("동기식 실행 결과 : " + result);
    }catch(err){
        console.error(err); // console.error() 는 console.log() 와 크게 차이는 없지만 에러 출력시 주로 사용합니다.
    }
}

abcd();