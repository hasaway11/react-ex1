import { useState } from "react";

export default function Test04() {
const [visible, setVisible] = useState(false);
  const [time, setTime] = useState("");

  const handleClick = () => {
    if (!visible) {
      setTime(new Date().toString());
    }
    setVisible(!visible);
  };

  return (
    <div>
      <h1>My First JavaScript (React)</h1>

      <button onClick={handleClick}>
        {visible ? "시간 숨기기" : "시간 보기"}
      </button>

      {visible && <p>{time}</p>}
    </div>
  );
}
