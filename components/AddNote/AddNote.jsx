import {useState} from 'react'
import './AddNote.css'
import MyButton from '../MyButton/MyButton'
import { CATEGORIES, DEFAULT_CATEGORY } from '../../src/constants';

const AddNote = ({addNote}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState(DEFAULT_CATEGORY);

  const addNotes = () => {
    if (!title.trim() || !text.trim()) {
      alert('Please fill in all fields');
      return;
    }
    addNote(title, text, category); 
    setTitle('');
    setText('');
    setCategory(DEFAULT_CATEGORY);
  };


  return (
    <div className='add-note-container'>
      <h4>Add Note</h4>
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
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <MyButton 
        label='Add Note'
        className='add-note-button' 
        onClick={addNotes} 
      />
    </div>
  )
}

export default AddNote