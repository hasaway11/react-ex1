import { useState } from "react";

function Cart({cartItem, inc, dec}) {
  return (
    <div>
      <span style={{width:'100px', display:'inline-block'}}>{cartItem.name}</span>
      <button onClick={()=>inc(cartItem.id)}>+</button>
      <span style={{width:'30px', display:'inline-block', textAlign:'center'}}>{cartItem.count}</span>
      <button onClick={()=>dec(cartItem.id)}>-</button>
    </div>
  );
}

function TotalPrice({price}) {
  return (
    <div>총액 : {price} 원</div>
  )
}

function App() {
  const [carts, setCarts] = useState([
    {id:1, name:'컵라면', price:1000, count:3},
    {id:2, name:'우유', price:3000, count:2},
    {id:3, name:'케이크', price:5000, count:1},
  ]);

  const totalPrice = carts.reduce((sum, cart) => sum + (cart.price * cart.count), 0);
  
  const inc=(id)=>setCarts(prev=>prev.map(c=>c.id!==id?c:{...c, count:c.count+1}));

  const dec=(id)=>setCarts(prev=>prev.map(c=>c.id!==id?c:{...c, count:c.count-1}));

  return (
    <>
      {
        carts.map(cart=><Cart key={cart.id} cartItem={cart} inc={inc} dec={dec} />)
      }
      <TotalPrice price={totalPrice}  />
    </>
  );
}

export default App
