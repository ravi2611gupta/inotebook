import React, {useContext, useState} from "react";
import noteContext from '../context/notes/noteContext'

function Addnote() {

    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"", description:"", tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
        // addNote(note)
        addNote(note.title, note.description, note.tag)
    }

    const changeListener = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
    <div className="row mt-3">
        <div className="col-sm-12">
          <h3>Add A Note</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" name="title" id="title" onChange={changeListener}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" onChange={changeListener} className="form-control" id="description" name="description"/>
            </div>
            <button type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addnote