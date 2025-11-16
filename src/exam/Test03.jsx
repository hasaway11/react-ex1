import React from 'react'

export default function Test03() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? '🔆 켜짐' : '🌙 꺼짐'}
    </button>
  );
}
