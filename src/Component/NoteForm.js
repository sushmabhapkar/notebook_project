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

     const titleChangeHandler=(event)=>
     {
      setTitle(event.target.value);
     }

     const descriptionChangeHandler=(event)=>
     {
      setDescription(event.target.value);
     }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noteTitle">Note Title:</label>
      <input
        type="text"
        id="noteTitle"
        value={title}
        onChange={titleChangeHandler}
        
      />
      <br /><br />
      <label htmlFor="noteDescription">Note Description:</label><br />
      <textarea
        id="noteDescription"
        value={description}
        onChange={descriptionChangeHandler}
        
      ></textarea>
      <br /><br />
      <button type="submit">Add To Book</button>
    </form>

  );
}

export default NoteForm;