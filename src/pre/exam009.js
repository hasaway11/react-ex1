// 전개연산자 (spread 연산자)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrWrap = [...arr1, ...arr2, ...arr3];

console.log(arrWrap); 

const [x,y,...rest] = arrWrap;
console.log(rest);

const obj = {
  irum : '홍길동',
  nai: 20,
  address: '제주도'
};

const newObj1 = {...obj, address:'서울시'};
const newObj2 = {...obj, nai:30};

console.log(newObj1);
console.log(newObj2);