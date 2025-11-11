function FruitItem({name, count, setter}) {
  const handleIncrease=()=>setter(prev=>prev+1);
  const handleDecrease=()=>setter(prev=>{
    if(prev<=0)
      return 0;
    return prev-1;
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