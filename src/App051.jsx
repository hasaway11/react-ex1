import { useState } from "react";

function App() {
  const [cart, setCart] = useState({id:1, name:'컵라면', price:1000, count:3});

  const inc=()=>setCart(prev=>({...prev, count:prev.count+1}));
  
  const dec=()=>setCart(prev=>({...prev, count:prev.count<=1?0:prev.count-1}));

  const totalPrice = cart.price * cart.count;

  return (
    <>
      <div>
        <span>{cart.name}</span>
        <button onClick={inc}>+</button>
        {cart.count}
        <button onClick={dec}>-</button>
      </div> 
      <div>
        금액:{totalPrice}원
      </div>
    </>
  );
}

export default App