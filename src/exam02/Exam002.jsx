import { useState } from "react";

// 내일 사용하자
const btnStyle = {
  splay:'inline-block', 
  width:'100px'
}

export default function Exam002() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  
  const plus=()=>{
    setCount(count+1);
    setPrice(price+1000);
  }
  const minus=()=>{
    if(count>1)
      setCount(prev=>prev-1);
    else
      setCount(0);
    setPrice(prev=>prev-1000);
  }

  const reset=()=>{
    setCount(0);
    setPrice(0);
  }
  return (
    <div>
      <p>개수: {count}개</p>
      <p>가격 : 1000원</p>
      <p>총액: {price}원</p>
      <button onClick={plus} style={btnStyle}>+</button>
      <button onClick={minus} style={btnStyle}>-</button>
      <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
    </div>
  );
}