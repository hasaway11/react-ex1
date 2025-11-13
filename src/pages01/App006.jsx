import Member2 from "../component/Member2"

function App() {  
  const kbo = [
    {rank:1, name: 'LG 트윈스', win:85, lose:56},
    {rank:2, name: '한화 이글스', win:83, lose:57},
    {rank:3, name: 'SSG 랜더스', win:75, lose:65},
  ]
  return (
    <div>
      <Member2 team={kbo[0]}/>
      <Member2 team={kbo[1]}/>
      <Member2 team={kbo[2]} />
    </div>
  )
}


export default App