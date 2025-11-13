import React, { useState } from 'react'

function App() {
  const [val, setVal] = useState(0)

  const inc=()=>{
    setVal(val+1);      // 0->1
    setVal(val+1);      // 0->1
    setVal(val+1);      // 0->1
    console.log(val);   // 0
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={inc}>증가</button>
      </div>
    </div>
  )
}

export default App