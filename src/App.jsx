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

  }

  const deleteNote = () => {}

  const updateNote = () => {}

  const selectNote = () => {}
 
  return (
    <>
      <AddNote />
    </>
  )
}

export default App
