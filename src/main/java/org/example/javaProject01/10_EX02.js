// 배열 자료를 반복실행을 이용하여 학생단위의 객체로 저장하고 다시 객체배열로 구성하여 for문을 이용하여 students 배열에 학생별로 출력하세요.

const names = ["홍길동", "홍길서", "홍길북", "홍길남"];
const kors = [98,78,56,89];
const mats = [89,57,48,69];
const engs = [88,99,69,78];

const students = [];

function Student(name, korean, math, english){
    this.name = name;
    this.kor = korean;
    this.math = math;
    this.eng = english;
}

// 배열의 요소를 추가하는 명령 : students.push(std);

for(let i=0; i<names.length; i++){
    students.push(new Student(names[i], kors[i], mats[i], engs[i]));
}

console.log(students);