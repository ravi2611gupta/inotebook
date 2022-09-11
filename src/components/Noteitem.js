import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function Noteitem(props) {

    const context = useContext(noteContext)
    const {deleteNote} = context

    const {note, updateNote} = props;

  return (
    <div className='col-md-3 mt-4'>
        <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div>
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully.", "success")}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Noteitem