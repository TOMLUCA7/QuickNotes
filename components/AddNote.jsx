import React, {useState} from 'react'

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  
  return (
    <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <input style={{width: '30%', padding: '10px', marginBottom: '10px', borderRadius: '10px'}} type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input style={{width: '30%', padding: '10px', marginBottom: '10px', borderRadius: '10px'}} type="text" placeholder='Your note here' value={text} onChange={(e) => setText(e.target.value)} />
      <button style={{width: '20%', padding: '10px', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'blue', color: 'white'}} >Add Note</button>
    </div>
  )
}

export default AddNote