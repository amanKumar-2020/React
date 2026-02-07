import React from 'react'

const ShowNotes = ({ notes, onDelete, onUpdate }) => {
  return <div>
    {notes.map((note)=>{
      return (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.desc}</p>
        </div>
      );
    })}
  </div>;
};

export default ShowNotes;
