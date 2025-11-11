import { useState } from "react";

function App() {
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
      {count}<br/>
      <button onClick={add}>증가</button>
      <button onClick={inc}>증가</button>
    </div>
  )
}

export default App;