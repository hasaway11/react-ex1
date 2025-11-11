
import Item from "./component/Item"
import './App.css'
import { useState } from "react";

function App() {
  const [select, setSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);

  const play=(choice)=>{
    setSelect(choice);
    setComputerSelect(Math.floor(Math.random()*2)===1?'홀':'짝');
    const judgementResult = judgement();
    setResult(judgementResult); 
    if(judgementResult==="win")
      setWin(win+1);
    else
      setLose(lose+1);
  }

  const judgement = ()=>(computerSelect===select)? "win":"lose";

  const getOppositeResult=()=>{
    if (result === "") 
      return "";
    return result === "win" ? "lose" : "win";
  }

  return (
    <>
      <div className="main">
        <Item title="You" select={select} result={result} />
        <Item title="Computer" select={computerSelect} result={getOppositeResult()} />
      </div>
      <div className="main">
        <button onClick={()=>play('홀')}>홀</button>
        <button onClick={()=>play('짝')}>짝</button>
      </div>
      <div className="main">
        {win}승 {lose}패
      </div>
    </>
  )
}

export default App