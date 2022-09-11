import React, {useContext, useState} from "react";
import noteContext from '../context/notes/noteContext'

function Addnote(props) {

    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"", description:"", tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        // addNote(note)
        addNote(note.title, note.description, note.tag)
        setNote({title:"", description:"", tag:""})
        props.showAlert("Added Successfully.", "success")
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
              <input type="text" className="form-control" name="title"  value={note.title} id="title" minLength={5} required onChange={changeListener}/>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" onChange={changeListener} value={note.description} className="form-control" minLength={5} required id="description" name="description"/>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" onChange={changeListener} value={note.tag} className="form-control" minLength={3} required id="tag" name="tag"/>
            </div>
            <button type="submit" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} onClick={handleClick} className="btn btn-primary">Add Note</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addnote