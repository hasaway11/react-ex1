function Hello({ color, name='이름없음', isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}

function App() {
  return (
    <>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </>
  )
}

export default App;