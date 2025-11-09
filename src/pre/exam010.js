const obj = {
  irum : '홍길동',
  nai: 20,
  address: '제주도'
};

const newObj1 = {...obj, address:'서울시'};
const newObj2 = {...obj, nai:30};

console.log(newObj1);
console.log(newObj2);