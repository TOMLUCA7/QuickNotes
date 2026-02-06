import NotesList from '../NotesList/NotesList'

const Note = ({notes, deleteNote, updateNote}) => {
  return (
    <NotesList notes={notes} deleteNote={deleteNote} updateNote={updateNote}/>
  )
}

export default Note