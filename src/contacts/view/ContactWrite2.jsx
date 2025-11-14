import useInput from "../hook/useInput";
import styles from "./ContactWrite.module.css";

function ContactInput({korName, engName, useInput}) {
  const {check, change, message} = useInput;
  return (
    <div className="mt-3 mb-3">
      <label className="form-label">{korName}:</label>
      <input className="form-control" name={engName} onBlur={check} onChange={change} />
      {message!=='' && <span className={styles.fail}>{message}</span>}
    </div>
  )
}

function ContactWrite() {
  const nameInput = useInput('이름을 입력하세요', /^[가-힣]{2,5}$/, '한글 2~5자입니다');
  const telInput = useInput('연락처를 입력하세요', /^[0-9]+$/, '숫자 1자 이상입니다');
  const addressInput = useInput('연락처를 입력하세요', /^[가-힣]+$/, '한글 1글자 이상입니다');

  const doWrite=()=>{
    const r1 = nameInput.check();
    const r2 = telInput.check();
    const r3 = addressInput.check();
    console.log(r1, r2, r3);
    if((r1&&r2&&r3)==false)
      return;
    console.log("가입합니다");
  }

  return (
    <>  
      <ContactInput korName="이름" engName="name" useInput={nameInput} />
      <ContactInput korName="연락처" engName="tel" useInput={telInput} />
      <ContactInput korName="주소" engName="address" useInput={addressInput} />
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