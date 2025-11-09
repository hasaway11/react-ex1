import '../App.css'

function Member1(props) {
  return (
    <div className='box'>{props.rank}위 {props.name}</div>
  )
}

export default Member1