function useState1(initialValue) {
  return {
    value: initialValue,
    setValue(val) {
      this.value = val;
    }
  }
}

// 구조분해할당을 했기 때문에 우변의 setValue는  더이상 메소드가 아니다
const {value, setValue} = useState1(1);
setValue(value+1);
console.log(value);