// 자바스크립트 모듈 규칙
// - 상대 경로로 시작 : 현재 파일의 위치를 기준으로 찾는다
// - 경로 표시가 없거나 절대 경로일 때 : 라이브러리로 인식해 node_modules 에서 찾는다

import './App.css';

function App() {
  return (
    <div>
      <div className='box'>KBS</div>
      <div className='box'>MBC</div>
      <div className='box'>SBS</div>
    </div>
  )
}

export default App;