// 자바스크립트 기본타입 : number, string, boolean, null, undefined

let a = 10;
// 값 10이 복사됨
let b = a;   
b = 20;

console.log(a); // 10
console.log(b);


const arr1 = [1, 2, 3];
// 참조 복사 (같은 배열을 가리킴)
const arr2 = arr1; 

arr2[0] = 99;

console.log(arr1); // [99, 2, 3]
console.log(arr2); // [99, 2, 3]