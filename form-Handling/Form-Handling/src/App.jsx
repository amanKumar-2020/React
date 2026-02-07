// App.jsx
import React, { useState } from "react";
import CreateNotes from "./notes/CreateNotes";
import ShowNotes from "./notes/ShowNotes";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [notes, setNotes] = useState([
    { id: 1, title: "Meeting Ideas", desc: "Brainstorming for Q2 planning..." },
    { id: 2, title: "Groceries List", desc: "Milk, Eggs, Bread, Cheese..." },
    { id: 3, title: "Book Chapters", desc: "Chapter 1: Introduction..." },
  ]);

  // Add Note
  const handleSubmit = () => {
    if (!title || !desc) return alert("Please fill in both fields");

    // Check if we are updating an existing note (optional logic, keeping it simple for now)
    // For this version, we just add new.
    // If you want "Update" to replace the old one, we'd need an 'editingId' state.
    const newNote = { id: Date.now(), title, desc };
    setNotes([newNote, ...notes]);
    setTitle("");
    setDesc("");
  };

  // Delete Note
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Update Note (Populate the input fields)
  const handleUpdate = (note) => {
    setTitle(note.title);
    setDesc(note.desc);
    // Note: This just fills the inputs. To "Save" the update back to the same ID
    // requires a bit more logic (tracking an editID), but this fits your UI flow nicely.
  };

  return (
    <div className="app-container">
      <CreateNotes
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        onSubmit={handleSubmit}
      />
      <ShowNotes
        notes={notes}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
