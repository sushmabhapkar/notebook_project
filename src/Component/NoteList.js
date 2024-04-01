import React from 'react';

function NoteList({ notes, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <strong>{note.title}</strong>: {note.description}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
