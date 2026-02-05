import React, { useState } from 'react'
import Modal from 'react-modal';

const NotesList = ({notes, deleteNote}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const openModal = (note) => {
    setSelectedNote(note);
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
          <div>
            <h1>{selectedNote.title}</h1>
            <p style={{ fontSize: '20px' }}>{selectedNote.text}</p>
            <button 
              onClick={closeModal}
              style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default NotesList