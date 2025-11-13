// 1. 박스 2개(타이틀, 큰 홀짝, 결과)
// 2. 홀, 짝 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다

import Item from "../component/Item"
import './App.css'

function App() {

  return (
    <>
      <div className="main">
        <Item title="You" />
        <Item title="Computer" />
      </div>
      <div className="main">
        <button>홀</button>
        <button>짝</button>
      </div>
    </>
  )
}

export default App