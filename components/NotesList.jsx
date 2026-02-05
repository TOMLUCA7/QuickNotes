import React from 'react'

const NotesList = ({notes}) => {
  return (
    <div style={{ flexWrap: 'wrap', flexDirection: 'row', gap: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black', borderRadius: '10px', padding: '10px', marginBottom: '10px'}}>
      {notes.map(note => (
        <div key={note.id} style={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black', borderRadius: '10px', padding: '10px', gap: '10px'}}>
          <h2 style={{}}>{note.title}</h2>
          <p style={{color: "blue"}}>{note.text}</p>
        </div>
      ))}
    </div>
  )
}

export default NotesList