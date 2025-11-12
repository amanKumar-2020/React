import { useState } from "react";

const LiveTypingDisplay = () => {
  const [text, setText] = useState("");

  function Typing(elem) {
  
    setText(elem.target.value)
  }

  return (
    <div>
     <input type="text"
     placeholder="Enter Here"
     onChange={(elem)=>{
      Typing(elem)
     }}
      />
      <div>{text}</div>
    </div>
  )
}

export default LiveTypingDisplay;
