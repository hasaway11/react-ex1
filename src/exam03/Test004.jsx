import React, { useRef, useState } from 'react'

function Test003() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const nameRef = useRef(null);

  const handleAdd=()=>{
    if(!name)
      setMessage("이름을 입력하세요");
    else {
      setNames([...names, name]);
      setName('');
      nameRef.current.focus();
    }
  }

  const handleDelete=()=>{

  }

  return (
    <div>
      <ul>
        {/* 같은 이름을 넣으면 키 충돌이 발생한다...문자열은 키로 적합하지 않다 */}
        {
          names && names.map(name=>{
            return (
              <li key={name}>
                {name} <button onClick={handleDelete}>삭제</button>
              </li>
            )
          })
        }
      </ul>
      이름:<input value={name} onChange={e=>setName(e.target.value)} placeholder="이름" name='email' ref={nameRef}/>
      <button onClick={handleAdd}>이름 추가</button>
      <p style={{color:'red', fontSize:'0.8em'}}>{message}</p>
    </div>
  )
}

export default Test003