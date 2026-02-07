import { useState } from "react";
import "./App.css";
import CreateNotes from "./Notes/CreateNotes";
import ShowNotes from "./Notes/ShowNotes";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "demo title 1", desc: " demo description 1" },
    { id: 2, title: "demo title 2", desc: " demo description 2" },
    { id: 3, title: "demo title 3", desc: " demo description 3" },
  ]);
  const handleSubmit = () => {};

  const handleUpdate = () => {};
  const handleClear = () => {};
  const handleDelete = () => {};

  return (
    <>
      <div className="app-container">
        <CreateNotes
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          onSubmit={handleSubmit}
          onUpdate={handleUpdate}
          OnClear={handleClear}
        />
        <ShowNotes
          notes={notes}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </div>
    </>
  );
}

export default App;
