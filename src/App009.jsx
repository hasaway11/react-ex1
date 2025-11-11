function Hello({ color, name="이름없음", isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}

function Wrapper(props) {
 return (
    <div style={{border: '2px solid black', padding: '16px'}}>
      {props.children}
    </div>
  )
}


function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;