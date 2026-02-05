import React, {useState} from 'react'

const AddNote = ({addNote}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddClick = () => {
    addNote(title, text); 
    setTitle('');
    setText('');
  };


  return (
    <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <input style={{width: '30%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid black'}} type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input style={{width: '30%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid black'}} type="text" placeholder='Your note here' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick} style={{width: '20%', padding: '10px', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'blue', color: 'white', border: '1px solid black'}} >Add Note</button>
    </div>
  )
}

export default AddNote