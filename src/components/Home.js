import React from 'react'
import Notes from './Notes'
// import noteContext from '../context/notes/noteContext'
function Home(props) {
  // const {showAlert} = props; //step 1

  // const first = useContext(second)

  // const context = useContext(noteContext)
  // const {notes, setNotes} = context;
  return (
    <>
      
      {/* <Notes showAlert={showAlert} /> */} {/* step 2 */}
      <Notes showAlert={props.showAlert} />
     
    </>
  )
}

export default Home