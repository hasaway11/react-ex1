import { useState } from "react"

function App() {
  const [val, setVal] = useState(1);

  const inc=()=>setVal(prev=>prev+1);

  const dec=()=>{
    if(val<=1)
      setVal(0);
    setVal(prev=>prev-1);
  }

  return (
    <>
      <button onClick={inc}>증가</button>
      <span style={{display:'inline-block', width:'100px', textAlign:'center'}}>{val}</span>
      <button onClick={dec}>감소</button>
    </>
  )
}

export default App