function FruitItem({name, count, setter, fruitKey}) {
  // 화살표 함수에서 객체를 바로 반환하려면 ()로 감싸서 이건 함수 {}가 아니라 객체라고 명시해야 한다
  const handleIncrease=()=>setter(prev => ({ ...prev, [fruitKey]: prev[fruitKey] + 1 }))

  const handleDecrease=()=>setter(prev=>{
    if(prev[fruitKey]<=0)
      return {...prev, [fruitKey]:0};
    return {...prev, [fruitKey]:prev[fruitKey]-1}
  });

  return (
    <div>
      <div>
        <span>{name}:</span>
        <button onClick={handleIncrease}>+</button>
        {count}
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  )
}

export default FruitItem