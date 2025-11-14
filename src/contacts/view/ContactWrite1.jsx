import { useState } from "react";
import styles from "./ContactWrite.module.css";

function useInput(msg) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const change = e=>setValue(e.target.value);

  const check=()=>{
    setMessage('');
    if(value==='') {
      setMessage(msg);
      return false;
    }
    return true;
  }

  return {value, message, check, change};
}

function ContactWrite() {
  const nameInput = useInput('이름을 입력하세요');
  const telInput = useInput('연락처를 입력하세요');

  const doWrite=()=>{
    const r1 = nameInput.check();
    const r2 = telInput.check();
    if((r1&&r2)==false)
      return;
    console.log("가입합니다");
  }

  return (
    <>
      <div className="mt-3 mb-3">
        <label className="form-label">이름:</label>
        <input className="form-control" name="name" onBlur={nameInput.check} onChange={nameInput.change} />
        {nameInput.message!=='' && <span className={styles.fail}>{nameInput.message}</span>}
      </div>
      <div className="mt-3 mb-3">
        <label className="form-label">연락처:</label>
        <input className="form-control" name="name" onBlur={telInput.check} onChange={telInput.change} />
        {nameInput.message!=='' && <span className={styles.fail}>{telInput.message}</span>}
      </div>
      <div className="d-grid gap-3 mt-3 mb-3">
        <button type="button" className="btn btn-outline-dark btn-block" onClick={doWrite}>작성하기</button>
      </div>
    </>
  )
}

export default ContactWrite


/**
  상태 : 입력한 값
  ref : 패턴
  검증
 */