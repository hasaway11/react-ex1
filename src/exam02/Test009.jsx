import { useState } from "react";

function Test009() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    console.log(number);
  }

  const onDecrease = () => {
    setNumber(number - 1);
    setNumber(number - 1);
    setNumber(number - 1);
    console.log(number);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Test009