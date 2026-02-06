import {useState} from 'react'
import './AddNote.css'
import MyButton from '../MyButton/MyButton'
import { CATEGORIES, DEFAULT_CATEGORY } from '../../src/constants';

const AddNote = ({addNote}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState(DEFAULT_CATEGORY);

  const handleAddClick = () => {
    addNote(title, text, category); 
    setTitle('');
    setText('');
    setCategory(DEFAULT_CATEGORY);
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
      <select
        className='add-note-category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {Object.values(CATEGORIES).map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <MyButton 
        label='Add Note'
        className='add-note-button' 
        onClick={handleAddClick} 
      />
    </div>
  )
}

export default AddNote