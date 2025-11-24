import { create } from "zustand";

const useAuthStore = create((set, get)=>{
  return {
    login : undefined,
    readLogin:()=>{
      const login = get().login;
      console.log(`before : ${login}`);
      if(login===undefined) 
        setTimeout(()=>{
          set(state=>({login:false}));
          console.log(`state update : ${login}`);
        }, 1000)
    },
    setLogin:()=>set(state=>({login:true})),
    setLogout:()=>set(state=>({login:false}))
  }
});

export default useAuthStore;