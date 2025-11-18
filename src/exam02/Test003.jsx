function Wrapper({ children }) {
  const style = {border: '2px solid black', padding: '16px'};
  return (
    <div style={style}>
      { children }
    </div>
  )
}

function Hello({ color, name="이름없음" }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}


function Test03() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default Test03