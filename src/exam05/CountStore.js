import { create } from "zustand";

const useCountStore = create((set)=>{
  return {
    count: 1,
    inc:function() {
      set(state=>({count:state.count+1}))
    },
    dec:()=>set(state=>({count:state.count-1}))
  }
});

export default useCountStore;