let myNode = () => {
    console.log("Node");
};

let myName = "Node.js";

let myObj = {
    // 이름이 myName 이라는 멤버변수를 만들고, 값으로 'Node.js' 라는 String 값을 저장하려고 함.
    // myName : 'Node.js',
    // myName : sayName, // 값이 쓰일 위치에 동일한 값을 갖고 있는 변수이름 사용
    myName, // 멤버변수의 이름과 대입할 값을 갖고 있는 변수이름이 같다면 한번만 써도 됨.

    myNode,
}

console.log("멤버변수 myName 값 : " + myObj.myName);
console.log("멤버메서드 myNode 값 : " + myObj.myNode);

const obj2 = {myName, myNode};

console.log("-----------------------------------------------------------------------------------");

// obj3 객체를 만들고 ES6 이라는 멤버변수를 만들고 'Fantastic' 이라는 값을 저장하려고 한다면
const obj3={};


let v = "ES";

obj3[v + "6"] = 'Fantastic';

console.log("멤버변수 ES6 값 : " + obj3.ES6);

// 위 내용을 모두 종합한 객체 생성
console.log("----------------------------------------------------");


const newObj = {
    myName, // Node.js
    sayJS : () => {
        console.log("JS")
    }, // 익명함수 생성, 이름은 sayJS, 매개변수 없고 리턴타입 없는 함수, 결과 JS
    myNode, // 멤버 메서드 이름과 위에서 정의한 대입 함수의 이름이 동일하기에 이렇게 적어도 됨. 매개변수 없고 리턴타입이 존재하지않는 myNode, 결과 Node
    [v + 6]: 'Fantastic', // v = ES 그리고 6을 추가한 ES6 키를 갖는 값 Fantastic 멤버 변수 생성, 결과 Fantastic
};


console.log(newObj.myName); // 결과 Node.js
newObj.sayJS(); // 결과 JS
newObj.myNode(); // 결과 Node
console.log(newObj.ES6); // 결과 Fantastic





