import { useState } from 'react'

import './NotesList.css'
import MyButton from '../MyButton/MyButton';
import ModalCard from '../ModalCard/ModalCard';
import { CATEGORIES, DEFAULT_CATEGORY } from '../../src/constants';

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
        <div 
          key={note.id} 
          // clicking on the card will open the modal
          onClick={() => openModal(note)}
          className='notes-list-note'
        >
          <div 
            className='notes-list-note-category' 
            style={{ backgroundColor: CATEGORIES.find(c => c.name === note.category)?.color || '#fff' }}>
            <span style={{ color: CATEGORIES.find(c => c.name === note.category)?.colorLabel || '#fff' }}>
              {note.category}
            </span>
          </div>

          {/* time when note was created */}
          <h5>{new Date(note.createdAt).toDateString()}</h5>

          <h2 style={{ margin: 0 }}>{note.title}</h2>

          <p className='notes-list-note-text'>
            {note.text}
          </p>

          <MyButton 
            label='Delete'
            className='notes-list-note-delete-button'
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          />
        </div>
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