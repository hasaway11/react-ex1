function Item({title, select, result}) {
  const className = result===''?'default item': 'item  ' + result;
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="item-label">{select}</div>
      <h2>{result}</h2>
    </div>
  )
}

export default Item