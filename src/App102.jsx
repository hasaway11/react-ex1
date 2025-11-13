import { useState } from "react"

function useVal(initialValue) {
  const [val, setVal] = useState(initialValue);

  const inc=()=>setVal(prev=>prev+1);

  const dec=()=>{
    if(val<=1)
      setVal(0);
    else 
      setVal(prev=>prev-1);
  }
  return {val, inc, dec};
}


function App() {
  const {val, inc, dec} = useVal(1);

  return (
    <>
      <button onClick={inc}>증가</button>
      <span style={{display:'inline-block', width:'100px', textAlign:'center'}}>{val}</span>
      <button onClick={dec}>감소</button>
    </>
  )
}

export default App