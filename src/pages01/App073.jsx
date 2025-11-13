import React, { useState } from "react"

const Child = React.memo(function Child({ onClick }) {
  console.log('Child 렌더링!');
  return <button onClick={onClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child onClick={handleClick} />
    </>
  )
}

export default App

// 부모가 재렌더링되면 모든 자식도 재렌더링된다
// props가 변경되지 않은 경우 자식의 재렌더링을 막는 것이 React.memo HOC

// hook : use로 시작하며 컴포넌트 내부에서 사용
// HOC : 컴포넌트를 감싸서 기능을 추가