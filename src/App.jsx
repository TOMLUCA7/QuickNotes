import { useState } from 'react'
import './App.css'
import AddNote from '../components/AddNote'

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Shopping List", text: "Buy milk, bread and eggs", isEditing: false },
    { id: 2, title: "React Project", text: "Finish the CRUD exercise", isEditing: false }
  ]);

  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      text: '',
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

  const selectNote = (noteId) => {
    setSelectedNote(noteId)
  }
 
  return (
    <>
      <AddNote />
    </>
  )
}

export default App
