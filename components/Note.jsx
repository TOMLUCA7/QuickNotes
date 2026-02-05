import React from 'react'
import NotesList from './NotesList'

const Note = ({notes}) => {
  return (
    <div>
      <NotesList notes={notes}/>
    </div>
  )
}

export default Note