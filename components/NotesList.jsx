import React, { useState } from 'react'
import Modal from 'react-modal';

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
    <div style={{ flexWrap: 'wrap', flexDirection: 'row', gap: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', marginBottom: '5px' }}>
      {notes.map(note => (
        <div 
          key={note.id} 
          // לחיצה על הכרטיס תפתח את המודל
          onClick={() => openModal(note)}
          style={{ cursor: 'pointer', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', borderRadius: '10px', padding: '10px', gap: '10px', width: '200px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}
        >
          <h5>{new Date().toDateString()}</h5>
          <h2 style={{ margin: 0 }}>{note.title}</h2>
          <p style={{ color: "blue", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>
            {note.text}
          </p>
          <button 
            style={{ backgroundColor: 'red',border: '2px solid white', borderRadius: '10px', color: 'white', width: '100px', height: '30px', cursor: 'pointer' }} 
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Title Input */}
            <input 
              type="text" 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
            
            {/* Text Area */}
            <textarea 
              value={editText} 
              onChange={(e) => setEditText(e.target.value)}
              style={{
                fontSize: '18px',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                minHeight: '100px',
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />

            {/* Buttons style */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              {/* Update Button */}
              <button 
                style={{
                  padding: '10px 30px', 
                  borderRadius: '10px', 
                  backgroundColor: 'white', 
                  color: 'black', 
                  border: '1px solid blue', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
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
                style={{
                  padding: '10px 30px', 
                  borderRadius: '10px', 
                  backgroundColor: 'blue', 
                  color: 'white', 
                  border: 'none', 
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
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