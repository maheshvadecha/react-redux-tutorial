import { useState } from "react";

const Theme = () => {
const [color, setColor]= useState('white');
  return (
    <div>
      <input type="text" onChange={(event)=>setColor(event.target.value)}/>
      <button type="button" onClick={ ()=>{ }}>Text Color Change</button>
      <h2>{color}</h2>
    </div>
  )
}

export default Theme;
