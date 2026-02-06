import React from 'react'

const EditNoteFields = ({editTitle, editText, setEditTitle, setEditText}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
              type="text" 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
            
            {/* Text Area */}
            <textarea 
              value={editText} 
              onChange={(e) => setEditText(e.target.value)}
              style={{
                fontSize: '18px',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                minHeight: '100px',
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />
    </div>
  )
}

export default EditNoteFields