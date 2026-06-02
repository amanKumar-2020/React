import React from "react";
import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increment_By,
  decrement_By,
} from "./features/counterSlice.js";

const App = () => {
  const [inc_By, setInc_By] = useState("");
  const [dec_By, setDec_By] = useState("");

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-page">
      <div className="counter-card">
        <header className="counter-header">counter show</header>

        <div className="counter-body">
          <div className="display">{count}</div>

          <div className="controls">
            <div className="left">
              <button
                className="btn primary"
                onClick={() => dispatch(increment())}
              >
                inc
              </button>
              <button
                className="btn primary"
                onClick={() => dispatch(increment_By(inc_By))}
              >
                inc By
              </button>
              <div className="field">
                <label>inc by</label>
                <input
                  className="input"
                  placeholder="--"
                  value={inc_By}
                  onChange={(e) => setInc_By(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="right">
              <button className="btn secondary" onClick={()=>dispatch(decrement())}>dec</button>
              <button className="btn secondary" onClick={()=>dispatch(decrement_By(dec_By))}>dec By</button>
              <div className="field">
                <label>dec by</label>
                <input className="input" placeholder="--" value={dec_By} onChange={(e)=>setDec_By(Number(e.target.value))}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
