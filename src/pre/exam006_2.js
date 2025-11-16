function useState2(initialValue) {
  return [
    initialValue, (val)=>initialValue=val
  ]
}


const [value, setValue] = useState2(1);
setValue(value+1);
console.log(value);

setValue(1000);
console.log(value);