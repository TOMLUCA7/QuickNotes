import { useEffect, useState } from 'react'
import './App.css'
import AddNote from '../components/AddNote/AddNote'
import Note from '../components/Note/Note';
import { CATEGORIES, DEFAULT_CATEGORY } from './constants';

import Modal from 'react-modal';
// usually put it outside the component
Modal.setAppElement('#root');

function App() {
  const saved = localStorage.getItem('notes_data');
  const [notes, setNotes] = useState(saved ? JSON.parse(saved) : [
    { id: 1, title: "Shopping List", text: "Buy milk, bread and eggs", category: CATEGORIES.PERSONAL.name },
    { id: 2, title: "React Project", text: "Finish the CRUD exercise", category: CATEGORIES.WORK.name },
  ]);

  useEffect(() => {
    localStorage.setItem('notes_data', JSON.stringify(notes));
  }, [notes]);

  
  const addNote = (title, text, category = DEFAULT_CATEGORY) => {
    const newNote = {
      id: Date.now(),
      title: title,
      text: text,
      category: category,
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
