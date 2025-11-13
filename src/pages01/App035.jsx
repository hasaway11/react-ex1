import { useState } from 'react'
import FruitItem2 from '../component/FruitItem2';

function App() {
  const prices = { apple: 3000, banana: 1000, orange: 2000 };
  const [fruits, setFruits] = useState({apple:0, banana:0, orange:0})

  const total = fruits.apple * prices.apple + fruits.banana * prices.banana + fruits.orange * prices.orange;

  return (
    <div>
      <FruitItem2 name="사과" count={fruits.apple} setter={setFruits} fruitKey="apple" />
      <FruitItem2 name="바나나" count={fruits.banana} setter={setFruits} fruitKey="banana" />
      <FruitItem2 name="오렌지" count={fruits.orange} setter={setFruits} fruitKey="orange" />
      <div>
        <span>총액:{total}원</span>
      </div>
    </div>
  )
}

export default App