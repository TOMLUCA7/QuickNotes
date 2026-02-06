import { useState } from 'react'
import Modal from 'react-modal';
import EditNoteFields from '../EditNoteFields/EditNoteFields';
import './NotesList.css'

const NotesList = ({notes, deleteNote, updateNote}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');

  const openModal = (note) => {
    setSelectedNote(note);
    setEditTitle(note.title);
    setEditText(note.text);
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
          // לחיצה על הכרטיס תפתח את המודל
          onClick={() => openModal(note)}
          className='notes-list-note'
        >
          <h5>{new Date().toDateString()}</h5>
          <h2 style={{ margin: 0 }}>{note.title}</h2>
          <p className='notes-list-note-text'>
            {note.text}
          </p>
          <button 
            className='notes-list-note-delete-button'
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}

      {/* הקוד של המודל */}
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
            {/* text and title Input component */}
            <EditNoteFields 
              editTitle={editTitle} 
              editText={editText} 
              setEditTitle={setEditTitle} 
              setEditText={setEditText}
            />
            
            {/* Buttons style */}
            <div className='modal-buttons'>
              {/* Update Button */}
              <button 
                className='modal-buttons-update-button'
                onClick={(e) => {
                  e.stopPropagation();
                  const updatedNote = { ...selectedNote, title: editTitle, text: editText };
                  updateNote(selectedNote.id, updatedNote);
                  closeModal();
                }}
              >
                Update
              </button>

              {/* Close Button */}
              <button 
                onClick={closeModal}
                className='modal-buttons-close-button'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default NotesList