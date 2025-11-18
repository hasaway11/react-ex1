import React, { useState } from 'react'

function Test008() {
  let count = 0;
  const [value, setValue] = useState(0);

  const add=()=>{
    count++;
    console.log(count);
  }

  const inc=()=>{
    setValue(value+1);
  }

  console.log(`count:${count}, value:${value}`);

  return (
    <div>
      변수:{count}<br/>
      상태:{value}<br/>
      <button onClick={add}>증가</button>
      <button onClick={inc}>증가</button>
    </div>
  )
}

export default Test008