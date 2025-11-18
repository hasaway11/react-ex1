function Team({team}) {
  const {rank, name, win, lose} = team;
  return (
    <div className='box'>{rank}위 {name} {win}승 {lose}패</div>
  )
}


function Test001() {
  const teams = [
    {rank:1, name: 'LG 트윈스', win:85, lose:56},
    {rank:2, name: '한화 이글스', win:83, lose:57},
    {rank:3, name: 'SSG 랜더스', win:75, lose:65},
  ]
  return (
    <div>
      <Team team={kbo[0]}/>
      <Team team={kbo[1]}/>
      <Team team={kbo[2]} />
    </div>
  )
}

export default Test001