import { useState } from "react";

function InputSample() {
  // 상태인 text는 const로 지정해 재할당을 불가능하게 하자
  // setState 함수를 사용해야 리액트가 내부 상태 저장소를 업데이트하고 변경을 인지한다
  const [text, setText] = useState('');
  let [val, setVal] = useState(0);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <input type='button' onClick={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

function App() {
  return (
    <InputSample />
  )
}

export default App