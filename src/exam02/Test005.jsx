function Wrapper({ children }) {
  const style = {border: '2px solid black', padding: '16px'};
  return (
    <div style={style}>
      { children }
    </div>
  )
}

function Hello({ color, name="이름없음", isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null } 안녕하세요 {name}
    </div>
  );
}

function LoginMessage1({isLogin }) {
  if(isLogin)
    return <div>로그인하셨습니다</div>
  else
    <div>로그인하세요</div>
}

function LoginMessage2({isLogin }) {
  return (
    <>
      {isLogin && <div>로그인하셨습니다</div>}
      {!isLogin && <div>로그인하세요</div>}
    </>
  );
}


function Test005() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
      <LoginMessage1 />
      <LoginMessage2 />
    </Wrapper>
  )
}

export default Test005