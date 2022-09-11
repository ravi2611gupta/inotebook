import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

function Notes(props) {
  const context = useContext(noteContext);
  //   const { notes, addNote } = context;
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({id:"", etitle:"", edescription:"", etag:""})

  const navigate = useNavigate();

  const handleClick = (e)=>{
    // console.log("updating the note...", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Updated successfully", "success");
    refClose.current.click();
    // e.preventDefault();
    // addNote(note)
    // addNote(note.title, note.description, note.tag)
}

const changeListener = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
      // eslint-disable-next-line
    }else{
      // redirect to login
      navigate('/login');
    }
  }, []);

  const updateNote = (currentNote) => {
    // ref.click(); //normal JS, but when we are using useref we have to use current keyword
    ref.current.click();
    // setNote(currentNote);
    setNote({id: currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
  };

  
  const ref = useRef(null);
  const refClose = useRef(null);

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      >
        Edit Note
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={note.etitle}
                    className="form-control"
                    name="etitle"
                    minLength={5}
                    required
                    id="etitle"
                    onChange={changeListener}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    value={note.edescription}
                    onChange={changeListener}
                    className="form-control"
                    id="edescription"
                    minLength={5}
                    required
                    name="edescription"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    value={note.etag}
                    minLength={3}
                    required
                    onChange={changeListener}
                    className="form-control"
                    id="etag"
                    name="etag"
                  />
                </div>
                {/* <button
                  type="submit"
                  onClick={handleClick}
                  className="btn btn-primary"
                >
                  Add Note
                </button> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5 || note.etag.length<3} onClick={handleClick} className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <Addnote showAlert = {props.showAlert} />

      <div className="row mt-5">
        <div className="col-sm-12">
          <h3>Your Note</h3>
          <div className="row">
            <div className="col-sm-12">
              {notes.length===0 && "No notes to display..!"}
            </div>
            {notes.map((note) => {
              return (
                <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
