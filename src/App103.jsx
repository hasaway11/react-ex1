import { useRef, useState } from "react"
import './App.css';

function useCount(label, initialPrice) {
  const [count, setCount] = useState(1);
  const price = useRef(initialPrice);

  const inc=()=>setCount(prev=>prev+1);

  const dec=()=>{
    // if(count<=1) 처럼 작성하면 최신값을 읽어오지 못할 수 있다
    setCount(prev => (prev <= 1 ? 1 : prev - 1))
  }

  const getPrice = ()=>count * price.current;

  return {count, label, inc, dec, getPrice};
}

const CartItem=({hook})=>{
  const {count, label, inc, dec, getPrice} = hook;
  return (
    <div className="mt-3 mb-3">
      <span className="cart" style={{textAlign:'center'}}>{label} : </span>
      <button className="cart btn btn-primary" onClick={inc}>증가</button>
      <span className="cart" style={{textAlign:'center'}}>{count}</span>
      <button className="cart btn btn-primary" onClick={dec}>감소</button>
      <span className="cart" style={{textAlign:'center'}}>{getPrice()}원</span>
    </div>
  );
}

function App() {
  const milkCount = useCount("우유", 3000);
  const cakeCount = useCount("케이크", 5000);
  const cookieCount = useCount("쿠키", 1500);
  const totalPrice = milkCount.getPrice() + cakeCount.getPrice() + cookieCount.getPrice();

  return (
    <>
      <div>
        <CartItem hook={milkCount} />
        <CartItem hook={cakeCount} />
        <CartItem hook={cookieCount} />
        <span>총 금액: {totalPrice} 원</span>
      </div>
    </>
  )
}

export default App