import { useState } from "react";

const btnStyle = {
  splay:'inline-block', 
  width:'100px'
}

export default function Test01() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={btnStyle}>+</button>
      <button onClick={() => setCount(count - 1)} style={btnStyle}>-</button>
      <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
    </div>
  );
}
