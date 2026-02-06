import './EditNoteFields.css'

const EditNoteFields = ({editTitle, editText, setEditTitle, setEditText}) => {
  return (
    <div className='edit-note-fields-container'>
        <input 
          type="text" 
          value={editTitle} 
          onChange={(e) => setEditTitle(e.target.value)}
          className='edit-note-fields-title'
        />
            
        <textarea 
          value={editText} 
          onChange={(e) => setEditText(e.target.value)}
          className='edit-note-fields-text'
        />
    </div>
  )
}

export default EditNoteFields