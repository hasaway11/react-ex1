import '../App.css'

function Member2(props) {
  const {rank, name, win, lose} = props.team;
  return (
    <div className='box'>{rank}위 {win}승 {lose}패 {name}</div>
  )
}

export default Member2