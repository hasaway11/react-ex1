import React, { useState } from "react";

function CartItem({cart, inc, dec}) {
  console.log("CartItem");
  return (
    <div>
      <span>{cart.name}</span>
      <button onClick={inc}>+</button>
      {cart.count}
      <button onClick={dec}>-</button>
    </div> 
  );
}

function TotalPrice({price}) {
  console.log("TotalPrice");
  return (
    <div>
      금액:{price}원
    </div>
  );
}

// 리렌더링 방지
const SubPanel = React.memo(function SubPanel({val}) {
  console.log("SubPanel");
  return (
    <div>{val}</div>
  )
});

function App() {
  const [cart, setCart] = useState({id:1, name:'컵라면', price:1000, count:3});

  const inc=()=>setCart(prev=>({...prev, count:prev.count+1}));
  
  const dec=()=>setCart(prev=>({...prev, count:prev.count<=1?0:prev.count-1}));

  const totalPrice = cart.price * cart.count;

  const [val, setVal] = useState(100);
  return (
    <>
      <CartItem cart={cart} inc={inc} dec={dec} />
      <TotalPrice price={totalPrice} />
      <SubPanel val={val} />
    </>
  );
}

export default App