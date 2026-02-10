import MyButton from '../MyButton/MyButton';
import { CATEGORIES } from '../../src/constants';

const NoteCard = ({ note, openModal, deleteNote }) => {
  return (
    <div 
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
  )
}

export default NoteCard