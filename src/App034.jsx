import { useState } from 'react'
import FruitItem from './component/FruitItem';

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