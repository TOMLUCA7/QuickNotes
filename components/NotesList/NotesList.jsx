import { useState } from 'react'
import Modal from 'react-modal';
import EditNoteFields from '../EditNoteFields/EditNoteFields';
import './NotesList.css'
import MyButton from '../MyButton/MyButton';
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

      {/* modal code */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%', left: '50%', right: 'auto', bottom: 'auto',
            marginRight: '-50%', transform: 'translate(-50%, -50%)',
            width: '400px', borderRadius: '20px', textAlign: 'center'
          },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } // רקע כהה
        }}
      >
        {selectedNote && (
          <div className='modal-content'>
            {/* text, title and category Input component */}
            <EditNoteFields 
              editTitle={editTitle} 
              editText={editText} 
              editCategory={editCategory}
              setEditTitle={setEditTitle} 
              setEditText={setEditText}
              setEditCategory={setEditCategory}
            />
            
            {/* Buttons style */}
            <div className='modal-buttons'>
              {/* Update Button */}
              <MyButton 
                label='Update'
                className='modal-buttons-update-button'
                onClick={(e) => {
                  e.stopPropagation();
                  const updatedNote = { ...selectedNote, title: editTitle, text: editText, category: editCategory };
                  updateNote(selectedNote.id, updatedNote);
                  closeModal();
                }}
              />

              {/* Close Button */}
              <MyButton 
                label='Close'
                onClick={closeModal}
                className='modal-buttons-close-button'
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default NotesList