function Result({result}) {
  const {name, score} = result;
  // return (
  //   <li className="item">{name} 
  //     {score>=70 ?'\u2705':''}
  //   </li>
  // )

  return (
    <li className="item"> 
      {score>=70 ?<del>{name}</del>:<>{name}</>}
    </li>
  )
}

// 이모지(&#x2705;) 추가
function Test006() {
  const results = [
    {name:'홍길동', score:77},
    {name:'전우치', score:58},
    {name:'임꺽정', score:85},
  ]
  return (
    <ul>
    {
      results.map(result=><Result key={result.name} result={result} />)
    }
    </ul>
  )
}

export default Test006