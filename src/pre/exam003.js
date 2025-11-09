function change1(val) {
  // 값이 전달된다
  val++;
}

function change2(obj) {
  // 참조값이 전달된다
  obj.value++;
}

let a = 100;
const data = { value: 1 };

change1(a);
change2(data);

console.log(a);
console.log(data.value); 