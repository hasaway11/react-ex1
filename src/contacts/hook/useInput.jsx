import { useState } from "react"

function useInput(emptyMsg, pattern, patterCheckFailMsg) {
  console.log(pattern);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const change = e=>setValue(e.target.value);

  const check=()=>{
    if(value==='') {
      setMessage(emptyMsg);
      return false;
    }
    if(pattern.test(value)===false) {
      setMessage(patterCheckFailMsg);
      return false;
    }

    return true;
  }

  return {value, message, change, check};
}

export default useInput