// 15_Promise04.js

// promise 를 이용한 비동기실행에서 두 작업의 실행 순서를 맞춰야 할 때

let pm = new Promise((resolve, reject)=>{
    console.log("==작업 시작 ==");
    resolve();
});

pm
.then(()=>{
    console.log("작업1 시작");
    const wakeUpTime = Date.now() + 3000;
    while(Date.now() < wakeUpTime){}
    console.log("작업1 종료");
    return new Promise((resolve, reject)=>{
        resolve();
    });
})
.then(()=>{
    console.log("작업2 시작");
    console.log("작업2 종료");
})
.catch(()=>{})
.finally(()=>{})
