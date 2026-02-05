import { useState } from 'react'
import './App.css'
import AddNote from '../components/AddNote'
import Note from '../components/Note';

import Modal from 'react-modal';
// בדרך כלל שמים את זה מחוץ לקומפוננטה
Modal.setAppElement('#root');

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Shopping List", text: "Buy milk, bread and eggs", isEditing: false },
    { id: 2, title: "React Project", text: "Finish the CRUD exercise", isEditing: false },
  ]);

  
  const addNote = (title, text) => {
    const newNote = {
      id: new Date().getTime(),
      title: title,
      text: text,
      isEditing: false
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (noteId) => {
     let newNotes = [...notes]
     let deleteNoteById = newNotes.filter(note => note.id === noteId)
     newNotes.splice(deleteNoteById, 1)
     setNotes(newNotes)
  }

  const updateNote = (noteId, updatedNote) => {
    setNotes(notes.map(note => note.id === noteId ? updatedNote : note))
  }
  
 
  return (
    <>
      {notes.length > 0 ? (
        <>
          <AddNote addNote={addNote}/>
          <Note notes={notes} deleteNote={deleteNote} updateNote={updateNote}/>
        </>
      ) : (
        <>
          <AddNote addNote={addNote}/>
          <h3>No notes found</h3>
        </>
      )}
    </>
  )
}

export default App
