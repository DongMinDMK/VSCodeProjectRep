
// 하나의 변수 안에 여러 속성(멤버변수) & 멤버 메서드 들을 생성해놓고 객체지향프로그래밍을 할 수 있습니다.
// {} 중괄호 안에 key(요소의 이름) 와 value(요소의 값)이 ':'(콜론)으로 구분되어서 존재하는 값들의 집합

var objectVar = {a:10, b:20};
var product = {name:"냉장고", 제조사:"대한민국"};
var obj = {};

console.log("objectVar : " + typeof(objectVar));
console.log("product : " + typeof(product));
console.log("obj : " + typeof(obj));
console.log("-----------------------------------------------------------------------------------");

console.log("{a:10, b:20} : ", typeof({a:10, b:20}));
console.log("{name : '냉장고', 제조사:'대한민국'} : " + typeof({name:"냉장고", 제조사:"대한민국"}));
console.log("{} : " + typeof({}));
console.log("-----------------------------------------------------------------------------------");

console.log("objectVar.a = " + objectVar.a + ", objectVar.b = " + objectVar.b);
console.log("product.name = " + product.name + ", product.제조사 = " + product.제조사);
console.log("objectVar['a'] = " + objectVar['a'] + ", objectVar['b'] = " + objectVar['b']);
console.log("product['name'] = " + product['name'] + ", product['제조사'] = " + product['제조사']);

// 자바스크립트의 객체는 별도의 클래스 선언 없이, {} 중괄호 안에 직접 속성(키:값)들을 넣는 순간 객체(Object)로 인식되어 사용되어집니다.
// 값들의 자료형은 제한이 없으며, "객체안에 객체", "객체안의 배열" 등 모든 형태의 자료가 속성들로 구성이 가능합니다.

var obj1 = {
    useNumber : 273,
    useString : "문자열",
    useBoolean : true,
    useObject : {a:'1', b:'2'},
    useArray : [1,2,3,4,5]
};

for(var k in obj1){
    console.log(`키는 ${k}, 값은 ${obj1[k]}`);
}

console.log("-----------------------------------------------------------------------------------");

// 객체의 속성 추가와 제거
// - 동적 속성 추가/제거 : 처음 객체 생성하는 시점 이후에 객체의 속성을 추가하거나 제거할 수 있습니다.
// 빈 객체를 생성

var student = {};

student.이름 = '홍길동';
student.취미 = '악기';
student.성별 = '남성';
student['직업'] = '전사';

for(var k in student){
    console.log(`학생의 key : ${k}, value : ${student[k]}`);
}

console.log("-----------------------------------------------------------------------------------");

delete(student['직업']);

for(var k in student){
    console.log(`학생의 key : ${k}, value : ${student[k]}`);
}

console.log("-----------------------------------------------------------------------------------");


var obj1 = {
    useNumber : 273,
    useString : "문자열",
    useBoolean : true,
    useArray : [1,2,3,4,5],
    method: function(){
        console.log("객체 내의 멤버 메서드를 하나 생성합니다. 이것은 익명함수입니다.");
    },

    func: () => {
        console.log("매개변수가 존재하지 않고 리턴값도 존재하지 않은 화살표(애로우) 함수입니다.");
    }
};


obj1.method();
obj1.func();

console.log("-----------------------------------------------------------------------------------");


var person = {
    name : '홍길동',
    // eat : function(food){
    //     console.log("음식 : " + food);
    // }
    eat : (food) => {
        console.log(`음식 : ${food}`)
    }
};

person.eat("자장면");

console.log("-----------------------------------------------------------------------------------");


function Student(name, korean, math, english, science){
    this.name = name;
    this.korean = korean;
    this.math = math;
    this.english = english;
    this.science = science;
}

var std1 = new Student("홍길동", 88,78,98,87);
var std2 = new Student("홍길남", 77,68,89,65);
var std3 = new Student("홍길서", 99,74,95,78);


console.log(std1);
console.log(std2);
console.log(std3);

Student.music=100;
var std4 = new Student("홍길동서남북", 100,100,100,100);

console.log(std4);

std1.music = 90; // std1 객체에만 music 멤버가 추가됩니다.

console.log(std1);

// 7. 프로토타입
// - 생성자 함수를 사용해 생성된 객체가 공통으로 가지는 공간.
// - 자바스크립트의 모든 생성자 함수는 내부의 this 변수들의 prototype 을 갖습니다.
// - 생성자 함수에 멤버 변수나 멤버 메서드를 추가해서 생성자를 사용하여 객체가 만들어질때 적용되게 하려면 프로토타입을 이용합니다.

// 생성자함수의 추가로 멤버변수 또는 멤버메서드를 추가
Student.prototype.music=100; // 프로토타입 이용(기본 디폴트값으로 100으로 설정)

var std7 = new Student("홍길", 87,98,87,45);

console.log(std7); // 추가된 속성만 공통적으로 보여줌. 하지만 나머지의 값(korean, math, english, science)도 같이 바뀜.

console.log(`추가된 영어 점수 : ${std7.music}`);
console.log(`추가된 영어 점수 : ${std2.music}`);
console.log(std2);

console.log(std1);



