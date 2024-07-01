const odd = "홀수 입니다.";
const even = "짝수 입니다.";

// JSP 의 include 와 비슷한 구조를 구성
// 자바가 있는 파일을 아무런 조치 없이 include 해서 사용하는 반면
// 자바스크립트는 현재 파일에서 공유하고자 하는 변수나 함수를 export 해서 외부에 공유한 후에, 다른 파일에서 가져다 쓸 수 있습니다.

module.exports = {odd:odd, even:even};

// 만들어진 객체를 module.exports 에 저장하면 그 객체는 외부에 내보내집니다.
// 딱히 어느 파일로 내보낸다라는 방향은 없고,
// exports 되었다라는 걸 알고 있는 파일에서 require 해서 사용합니다.
// module 이라는 단위로, 이름은 파일이름인 Var 로 exports 됩니다.