// 배열 내장함수

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

superheroes.forEach(hero => {
  console.log(hero);
});

// map 은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열을 생성
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log(squared);

const squared2 = [];
array.forEach(n => {
  squared2.push(n * n);
});
console.log(squared2);

const squared3 = array.map(s=>{return s*s;});
console.log(squared3);

const squared4 = array.map(s=>s*s);
console.log(squared4);