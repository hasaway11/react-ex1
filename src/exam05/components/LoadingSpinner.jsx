import { Spinner } from 'react-bootstrap'

function LoadingSpinner() {
  const style ={
    height: '600px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
  return (
    <div style={style}>
      <Spinner/>
    </div>
  )
}

export default LoadingSpinner