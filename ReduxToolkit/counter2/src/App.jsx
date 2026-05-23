import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, incByAmount } from "./redux/features/counterSlice.js";
import { useState } from "react";

function App() {
  const [num, setNum] = useState("")
  const count  = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="counter-card">
        <h1>Counter</h1>

        <p className="count-number">{count}</p>

        <div className="button-row">
          <button type="button" onClick={()=>dispatch(inc())}>inc</button>
          <button type="button" onClick={()=>dispatch(dec())}>dec</button>
        </div>

        <div className="inc-by-row">
          <button type="button" onClick={()=>dispatch(incByAmount(Number(num)))}>incBy</button>
          <input type="number" placeholder="Enter value" value={num} onChange={(e)=>{
            setNum(e.target.value)
            console.log(e.target.value)
          }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
