import React, {useContext} from "react";
import noteContext from '../context/notes/noteContext'
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

function Notes() {
    
  const context = useContext(noteContext);
//   const { notes, addNote } = context;
  const { notes } = context;

  return (
    <>

        <Addnote/>

      <div className="row mt-5">
        <div className="col-sm-12">
          <h3>Your Note</h3>
        <div className="row">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
        </div>

        </div>
      </div>
    </>
  );
}

export default Notes;
