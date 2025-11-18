function Result({result}) {
  const {name, score} = result;
  return (
    <>
    { score>=70 && <div>{name} &#x2705;</div>}
    { score<70 && <div><del>{name}</del></div>}
    </>
  )
}

// 이모지(&#x2705;) 추가
function Test007() {
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

export default Test007