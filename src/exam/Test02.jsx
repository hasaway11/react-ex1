import { useState } from "react";

const btnStyle = {
  splay:'inline-block', 
  width:'100px'
}

export default function Test011() {
  const [count, setCount] = useState(0);
  
  const minus=()=>{
    if(count>1)
      setCount(count-1);
    else
      setCount(0);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={btnStyle}>+</button>
      <button onClick={minus} style={btnStyle}>-</button>
      <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
    </div>
  );
}
