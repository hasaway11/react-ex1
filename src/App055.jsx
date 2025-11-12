import { useState } from "react";

function Cart({cartItem}) {
  return (
    <div>
      <span style={{width:'100px', display:'inline-block'}}>{cartItem.name}</span>
      <button>+</button>
      <span style={{width:'30px', display:'inline-block', textAlign:'center'}}>{cartItem.count}</span>
      <button>-</button>
    </div>
  );
}

function App() {
  const [carts, setCarts] = useState([
    {id:1, name:'컵라면', price:1000, count:3},
    {id:2, name:'우유', price:3000, count:2},
    {id:3, name:'케이크', price:5000, count:1},
  ]);

  return (
    <>
      <Cart cartItem={carts[0]} />
      <Cart cartItem={carts[1]} />
      <Cart cartItem={carts[2]} />
    </>
  );
}

export default App
