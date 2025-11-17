import { useState } from "react";

export default function Test06() {
  const [on, setOn] = useState(false);
  const onImage = "https://www.w3schools.com/js/pic_bulbon.gif";
  const offImage = "https://www.w3schools.com/js/pic_bulboff.gif";
  const toggle = () => {
    setOn(!on);
  };

  return (
    <div>
      <div>
        <img src={on ? onImage : offImage} style={{ width: "100px" }}/>
      </div>
      <div>
        <button onClick={toggle}>{on ? "켜기" : "끄기"}</button>
      </div>
    </div>
  );
}
