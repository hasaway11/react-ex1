import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([
    {id:1, name:'컵라면', price:1000, count:3},
    {id:2, name:'우유', price:3000, count:2},
    {id:3, name:'케이크', price:5000, count:1},
  ]);

  return (
    <>
      <div>
        <span>{carts[0].name}</span>
        <button>+</button>
        {carts[0].count}
        <button>-</button>
      </div> 
      <div>
        <span>{carts[1].name}</span>
        <button>+</button>
        {carts[1].count}
        <button>-</button>
      </div> 
      <div>
        <span>{carts[2].name}</span>
        <button>+</button>
        {carts[2].count}
        <button>-</button>
      </div> 
    </>
  );
}

export default App
