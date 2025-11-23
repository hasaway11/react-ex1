import useCountStore from './CountStore'

function Test001() {
  const {count, inc, dec} = useCountStore();
  return (
    <div>
      <div>{count}</div>
      <button onClick={inc}>증가</button>
      <button onClick={dec}>감소</button>
    </div>
  )
}

export default Test001