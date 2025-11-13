import { useState } from "react"
import { create } from "zustand";

const useValStore = create((set)=>({
  val:1,
  inc: () => set((state) => ({ val:state.val+1 })),
  dec: () =>
    set((state) => ({ val: state.val <= 1 ? 1 : state.val - 1 })),
}));

function App() {
  const {val, inc, dec} = useValStore();

  return (
    <>
      <button onClick={inc}>증가</button>
      <span style={{display:'inline-block', width:'100px', textAlign:'center'}}>{val}</span>
      <button onClick={dec}>감소</button>
    </>
  )
}

export default App