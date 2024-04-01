import React, { useState } from 'react';


function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && description.trim() !== '') {
      onAddNote({
        title: title.trim(),
        description: description.trim()
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noteTitle">Note Title:</label>
      <input
        type="text"
        id="noteTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />
      <label htmlFor="noteDescription">Note Description:</label><br />
      <textarea
        id="noteDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <br /><br />
      <button type="submit">Add To Book</button>
    </form>
    
  );
}

export default NoteForm;
