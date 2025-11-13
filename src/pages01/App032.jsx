import { useState } from 'react'

function App() {
  const prices = { apple: 3000, banana: 1000, orange: 2000 };
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);
  const [orange, setOrange] = useState(0);

  const total = apple * prices.apple + banana * prices.banana + orange * prices.orange;

  return (
    <div>
      <div>
        <span>사과:</span><button onClick={()=>setApple(apple+1)}>+</button>{apple}<button>-</button>
      </div>
      <div>
        <span>바나나:</span><button onClick={()=>setApple(banana+1)}>+</button>{banana}<button>-</button>
      </div>
      <div>
        <span>오렌지:</span><button onClick={()=>setApple(apple+1)}>+</button>{orange}<button>-</button>
      </div>
      <div>
        <span>총액:{total}원</span>
      </div>
    </div>
  )
}

export default App