import '../App.css'

function Member(props) {
  console.log('props:', props)
  return (
    <div className='box'>{props.name}</div>
  )
}

export default Member