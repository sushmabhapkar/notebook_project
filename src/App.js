import React, { useState } from 'react';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';
import SearchBar from './Component/SearchBar';


function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return(
<div>
      <h1>NoteBook</h1>
      
      <SearchBar onSearch={setSearchTerm} />
      <strong><p>Total Notes:{notes.length}</p></strong> 
      <strong><p>Showing: {filteredNotes.length}</p></strong>
      
      <NoteForm onAddNote={handleAddNote} />
      
      <NoteList notes={filteredNotes} onDelete={handleDeleteNote} />
    </div>
  );
}
export default App;
   
