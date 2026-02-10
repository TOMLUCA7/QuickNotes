import { useState } from 'react'

import './NotesList.css'
import ModalCard from '../ModalCard/ModalCard';
import NoteCard from '../NoteCard/NoteCard';
import { DEFAULT_CATEGORY } from '../../src/constants';


const NotesList = ({notes, deleteNote, updateNote}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');
  const [editCategory, setEditCategory] = useState(DEFAULT_CATEGORY);

  const openModal = (note) => {
    setSelectedNote(note);
    setEditTitle(note.title);
    setEditText(note.text);
    setEditCategory(note.category || DEFAULT_CATEGORY);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedNote(null);
  }


  return (
    <div className='notes-list-container'>
      {notes.map(note => (
        <NoteCard 
          key={note.id}
          note={note}
          openModal={openModal}
          deleteNote={deleteNote}
        />
      ))}

      {/* modal code as component */}
      <ModalCard
        isOpen={modalIsOpen}
        closeModal={closeModal}
        selectedNote={selectedNote}
        updateNote={updateNote}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editText={editText}
        setEditText={setEditText}
        editCategory={editCategory}
        setEditCategory={setEditCategory}
      />
    </div>
  )
}

export default NotesList