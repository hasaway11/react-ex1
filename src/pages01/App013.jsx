import { useState } from 'react'

function App() {
  let [val, setVal] = useState(1);
  let [count, setCount] = useState(1);
  const change1=()=> {
    setVal(val+1);
    console.log(val);
  }

  const change2=()=>{
    val++;
    console.log(val);
  }

  const change3=()=> {
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={change1}>setState</button>
      {val}
      <button onClick={change2}>증가</button>
      <br />
      <button onClick={change3}>눌러</button>
    </div>
  )
}

export default App