import Modal from 'react-modal';
import EditNoteFields from '../EditNoteFields/EditNoteFields';
import MyButton from '../MyButton/MyButton';
import './ModalCard.css';

const ModalCard = ({
  isOpen, 
  closeModal, 
  selectedNote, 
  updateNote,
  editTitle, 
  setEditTitle,
  editText, 
  setEditText,
  editCategory, 
  setEditCategory
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: '50%', left: '50%', right: 'auto', bottom: 'auto',
          marginRight: '-50%', transform: 'translate(-50%, -50%)',
          width: '400px', borderRadius: '20px', textAlign: 'center'
        },
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } // Dark background
      }}
      ariaHideApp={false} 
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
  )
}

export default ModalCard;