const a = 10;
// 재할당 불가
// a = a + 10;

const obj = {a: 10};

// 참조 변수 obj는 const에 의해 참조값 변경이 금지된다
// 객체의 내부 속성은 자유롭게 수정가능
obj.a = obj.a + 10;

console.log(a);
console.log(obj.a);

// 
obj = {};
