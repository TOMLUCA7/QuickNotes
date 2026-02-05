import React from 'react'
import NotesList from './NotesList'

const Note = ({notes, deleteNote}) => {
  return (
    <div>
      <NotesList notes={notes} deleteNote={deleteNote}/>
    </div>
  )
}

export default Note