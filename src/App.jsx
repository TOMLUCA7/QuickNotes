import { useEffect, useState } from 'react'
import './App.css'
import AddNote from '../components/AddNote/AddNote'
import Note from '../components/Note/Note';

import Modal from 'react-modal';
// בדרך כלל שמים את זה מחוץ לקומפוננטה
Modal.setAppElement('#root');

function App() {
  const saved = localStorage.getItem('notes_data');
  const [notes, setNotes] = useState(saved ? JSON.parse(saved) : [
    { id: 1, title: "Shopping List", text: "Buy milk, bread and eggs", isEditing: false },
    { id: 2, title: "React Project", text: "Finish the CRUD exercise", isEditing: false },
  ]);

  useEffect(() => {
    localStorage.setItem('notes_data', JSON.stringify(notes));
  }, [notes]);

  
  const addNote = (title, text) => {
    const newNote = {
      id: Date.now(),
      title: title,
      text: text,
      isEditing: false
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (noteId) => {
     const filteredNotes = notes.filter(note => note.id !== noteId);
  setNotes(filteredNotes);
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
