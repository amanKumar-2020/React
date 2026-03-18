import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UserContext.Provider value={{count,setCount}}>
        <Navbar />
      </UserContext.Provider>
    </div>
  );
};

export default App;
