
import { useState } from 'react';

const NameTrogle = () => {
  const [message, setMessage] = useState("Hello Aman");

  function ClickFn() {
    setMessage((prev) =>
      prev === "Hello Aman" ? "You clicked me" : "Hello Aman"
    );
  }
  return (
    <div>
      <h2>{message}</h2>
      <button
        onClick={() => {
          ClickFn();
        }}
      >
        Click me{" "}
      </button>
    </div>
  );
}

export default NameTrogle;
