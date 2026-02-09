import { useEffect, useState } from 'react'
import './App.css'
import AddNote from '../components/AddNote/AddNote'
import Note from '../components/Note/Note';
import { DEFAULT_CATEGORY, CATEGORIES } from './constants';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterBar from '../components/FilterBar/FilterBar';

import Modal from 'react-modal';
// usually put it outside the component
Modal.setAppElement('#root');

function App() {
  const saved = localStorage.getItem('notes_data');
  const [notes, setNotes] = useState(saved ? JSON.parse(saved) : [
    { id: 1, title: "Shopping List", text: "Buy milk, bread and eggs", category: DEFAULT_CATEGORY },
    { id: 2, title: "React Project", text: "Finish the CRUD exercise", category: DEFAULT_CATEGORY },
  ]);

  const [searchNotes, setSearchNotes] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    alert('Note added successfully');
  }

  const deleteNote = (noteId) => {
     const filteredNotes = notes.filter(note => note.id !== noteId);
     setNotes(filteredNotes);
     alert('Note deleted successfully');
  }

  const updateNote = (noteId, updatedNote) => {
    setNotes(notes.map(note => note.id === noteId ? updatedNote : note))
    alert('Note updated successfully');
  }
  
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchNotes.toLowerCase()) ||
      note.text.toLowerCase().includes(searchNotes.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || note.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SearchBar searchNotes={searchNotes} setSearchNotes={setSearchNotes} />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />
      <AddNote addNote={addNote}/>
      {filteredNotes.length > 0 ? (
        <Note notes={filteredNotes} deleteNote={deleteNote} updateNote={updateNote}/>
      ) : (
        <h3>No notes found</h3>
      )}
    </>
  )
}

export default App
