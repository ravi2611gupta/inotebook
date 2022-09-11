import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const authtoken = localStorage.getItem('token');


  //   Get All Notes
  const getNotes = async () => {


    // API Call ⤵️⤵️⤵️⤵️
    const url = `${host}/api/notes/fetchallnotes`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      // body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    // console.log(json);
    
    setNotes(json); //for setting notes start
    // API Call ⤴️⤴️⤴️⤴️

 };



  //   Add a Note
  const addNote = async (title, description, tag) => {
    // API Call ⤵️⤵️⤵️⤵️
    const url = `${host}/api/notes/addnote`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    // console.log(json);
    // API Call ⤴️⤴️⤴️⤴️

    // todo API call
    // console.log("Adding a new note");

    // const note = json;
    // setNotes(notes.push(note))
  };

  //   Delete a Note
  const deleteNote = async (id) => {
     // API Call ⤵️⤵️⤵️⤵️
     const url = `${host}/api/notes/deletenote/${id}`;

     const response = await fetch(url, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
         "auth-token":
           authtoken,
       }
     });
     const json = await response.json();
     console.log(json);
     // API Call ⤴️⤴️⤴️⤴️

    // todo API call
    // console.log("deleting a note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //   Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call ⤵️⤵️⤵️⤵️
    const url = `${host}/api/notes/updatenote/${id}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          authtoken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    // API Call ⤴️⤴️⤴️⤴️

    // logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes);

  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
