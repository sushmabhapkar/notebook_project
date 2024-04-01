import React from 'react';

function SearchBar({ onSearch }) {
  return (
   <div>
    <label>Search Notes:</label>
    <input
      type="text"
      placeholder="Search notes...."
      onChange={(e) => onSearch(e.target.value)}
    />
    </div>
  );
}

export default SearchBar;




