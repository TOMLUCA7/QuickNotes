import './EditNoteFields.css'
import { CATEGORIES } from '../../src/constants';

const EditNoteFields = ({editTitle, editText, editCategory, setEditTitle, setEditText, setEditCategory}) => {
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

        <select
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
          className='edit-note-fields-category'
        >
          {CATEGORIES.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
    </div>
  )
}

export default EditNoteFields