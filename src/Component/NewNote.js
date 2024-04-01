import React from "react";
import NoteForm from "./NoteForm";
const newNote=(props)=>
{
    const SaveNoteDataHandler = (newNote) => {

        const notedata={
    
          ...newNote,
          id:Math.random().toString(),
        };
    
        props.onAddNote(notedata);
      };

    return(
        <div>
            <NoteForm onSaveNoteData={SaveNoteDataHandler} />
        </div>
    )
}
export default newNote;