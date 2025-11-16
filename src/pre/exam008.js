const array = [55,88,77,66,99];

const result = array.filter(a=>a>70);
console.log(result);

array.filter(a=>a>=70).forEach(a=>console.log(a));

array.filter(a=>a>=70).map(a=>a+'점 합격').forEach(a=>console.log(a));