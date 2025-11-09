const arr = [100, ()=>console.log('hello')];

const obj = {
  x: 100,
  hello:()=>console.log('hello')
};


// 배열의 구조분해할당. 이름을 마음대로 지정할 수 있다
const [val, insa] = arr;

// 객체의 구조분해할당. 정해진 배열 속성 이름을 사용해야 한다
const [x, hello] = obj;