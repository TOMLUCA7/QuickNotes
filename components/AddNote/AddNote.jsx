import {useState} from 'react'
import './AddNote.css'

const AddNote = ({addNote}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddClick = () => {
    addNote(title, text); 
    setTitle('');
    setText('');
  };


  return (
    <div className='add-note-container'>
      <input 
        className='add-note-title' 
        type="text" 
        placeholder='Title' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        className='add-note-text' 
        type="text" 
        placeholder='Your note here' 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button 
        className='add-note-button' 
        onClick={handleAddClick} 
      >
        Add Note
      </button>
    </div>
  )
}

export default AddNote