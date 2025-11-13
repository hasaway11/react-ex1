import React, { useCallback, useState } from "react";

const Cart = React.memo(function Cart({cartItem, inc, dec}) {
  console.log("Cart render");
  return (
    <div>
      <span style={{width:'100px', display:'inline-block'}}>{cartItem.name}</span>
      <button onClick={()=>inc(cartItem.id)}>+</button>
      <span style={{width:'30px', display:'inline-block', textAlign:'center'}}>{cartItem.count}</span>
      <button onClick={()=>dec(cartItem.id)}>-</button>
    </div>
  );
});

const TotalPrice=React.memo(function TotalPrice({price}) {
  console.log("TotalPrice render");
  return (
    <div>총액 : {price} 원</div>
  )
});

const SubPanel = React.memo(function SubPanel({count, plus}) {
  console.log("SubPanel render");
  return (
    <div>
      {count} 
      <button onClick={plus}>증가</button>
    </div>
  );
});

function App() {
  const [carts, setCarts] = useState([
    {id:1, name:'컵라면', price:1000, count:3},
    {id:2, name:'우유', price:3000, count:2},
    {id:3, name:'케이크', price:5000, count:1},
  ]);

  const [count, setCount] = useState(1);

  const totalPrice = carts.reduce((sum, cart) => sum + (cart.price * cart.count), 0);
  
  // prev 사용하므로 의존성 배열 비운다
  const inc=useCallback((id)=>setCarts(prev=>prev.map(c=>c.id!==id?c:{...c, count:c.count+1})), []);

  const dec=useCallback((id)=>setCarts(prev=>prev.map(c=>c.id!==id?c:{...c, count:c.count-1})), []);

  // useCallback을 사용할거면 인라인으로 사용하지 말자
  const plus=useCallback(()=>setCount(count+1), [count]);

  return (
    <>
      {
        carts.map(cart=><Cart key={cart.id} cartItem={cart} inc={inc} dec={dec} />)
      }
      <TotalPrice price={totalPrice}  />
      <SubPanel count={count} plus={plus} />
    </>
  );
}

export default App
