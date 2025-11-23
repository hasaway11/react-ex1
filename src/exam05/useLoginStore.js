import { create } from "zustand";

const useLoginStore=create((set)=>{
  return {
    isLogin: false,
    setLogin:function() {
      set(state=>({login:true}))
    },
    setLogout:()=>set(state=>({login:false}))
  }
});

export default useLoginStore;