import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Test03() {
  const [value, setValue] = useState(100);
  const navigate = useNavigate();

  // You should call navigate() in a React.useEffect(), not when your component is first rendered.
  // if(value===100)
  //   navigate("/");

  useEffect(()=>{
    if(value===100)
      navigate("/");
  }, []);

  return (
    <div>Test03</div>
  )
}

export default Test03