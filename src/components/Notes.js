import React, {useContext} from "react";
import noteContext from '../context/notes/noteContext'
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-12">
          <h3>Your Note</h3>
        <div className="row">
          {notes.map((note) => {
            return <Noteitem note={note} />;
          })}
        </div>

        </div>
      </div>
    </>
  );
}

export default Notes;
