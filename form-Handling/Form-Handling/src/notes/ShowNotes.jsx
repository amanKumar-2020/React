// ShowNotes.jsx
import React, { useState } from "react";

const ShowNotes = ({ notes, onDelete, onUpdate }) => {
  // State to track which note is currently clicked/active
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleCardClick = (id) => {
    // If clicking the same note, close it (toggle). Otherwise, open the new one.
    setSelectedNoteId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="show-section">
      <h2 className="section-title">My Notes</h2>

      <div className="notes-grid">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className={`note-card ${selectedNoteId === note.id ? "active" : ""}`}
              onClick={() => handleCardClick(note.id)}
            >
              <h3>{note.title}</h3>
              <p>{note.desc}</p>

              {/* Only show buttons if this note is selected */}
              {selectedNoteId === note.id && (
                <div className="card-actions">
                  <button
                    className="btn btn-delete btn-sm"
                    onClick={(e) => {
                      e.stopPropagation(); // Stop the card from closing when clicking button
                      onDelete(note.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-update btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdate(note);
                    }}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: "#888" }}>No notes yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default ShowNotes;
