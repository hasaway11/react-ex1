function App() {
  const a = 10;
  const b = 20;
  const name = "홍길동";

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '1.5em', 
    padding: '1em'
  }

  return (
    <div>
      {a}*{b}={a*b}<br/>
      <div style={style}>react.js</div>
      <div style={{backgroundColor:'darkcyan', color:'hotpink', fontSize:'1.5em', padding:'1em'}}>vue.js</div>
    </div>
  )
}

export default App;
