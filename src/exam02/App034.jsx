import { useState } from 'react';

function FruitItem({name, count, setter}) {
  const handleIncrease=()=>setter(prev=>prev+1);
  const handleDecrease=()=>setter(prev=>{
    if(prev<=0)
      return 0;
    return prev-1;
  });

  return (
    <div>
      <div>
        <span>{name}:</span>
        <button onClick={handleIncrease}>+</button>
        {count}
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  )
}


function App() {
  const prices = { apple: 3000, banana: 1000, orange: 2000 };
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);
  const [orange, setOrange] = useState(0);

  const total = apple * prices.apple + banana * prices.banana + orange * prices.orange;

  return (
    <div>
      <FruitItem name="사과" count={apple} setter={setApple} />
      <FruitItem name="바나나" count={banana} setter={setBanana} />
      <FruitItem name="오렌지" count={orange} setter={setOrange} />
      <div>
        <span>총액:{total}원</span>
      </div>
    </div>
  )
}

export default App