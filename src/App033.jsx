import { useState } from 'react'

function App() {
  const prices = { apple: 3000, banana: 1000, orange: 2000 };
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);
  const [orange, setOrange] = useState(0);

  const total = apple * prices.apple + banana * prices.banana + orange * prices.orange;

  const handleIncrease = (setter)=>setter(prev=>prev+1);

  const handleDecrease = (setter)=>setter(prev=>{
    if(prev<=0)
      return 0;
    return prev-1;
  });

  return (
    <div>
      <div>
        <span>사과:</span><button onClick={()=>handleIncrease(setApple)}>+</button>{apple}<button onClick={()=>handleDecrease(setApple)}>-</button>
      </div>
      <div>
        <span>바나나:</span><button onClick={()=>handleIncrease(setBanana)}>+</button>{banana}<button onClick={()=>handleDecrease(setBanana)}>-</button>
      </div>
      <div>
        <span>오렌지:</span><button onClick={()=>handleIncrease(setOrange)}>+</button>{orange}<button onClick={()=>handleDecrease(setOrange)}>-</button>
      </div>
      <div>
        <span>총액:{total}원</span>
      </div>
    </div>
  )
}

export default App