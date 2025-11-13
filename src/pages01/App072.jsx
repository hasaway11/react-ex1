import { useState } from "react"

function Child({ onClick }) {
  console.log('Child 렌더링!');
  return <button onClick={onClick}>Click me</button>;
};

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      {/* 부모가 재렌더링되면서 handleClick이 재생성 -> Child가 재랜더링 */}
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      {/* Child 컴포넌트는 상태가 없으므로 자체적으로 재렌더링되지 않는다 */}
      <Child onClick={handleClick} />
    </>
  )
}

export default App
