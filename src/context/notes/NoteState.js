import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
 
    const notesInitial = [
        {
          "_id": "62f92cd7a297c855dc9e85a3",
          "user": "62f7e2a5a6104cc05d7b07ba",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-14T17:11:51.770Z",
          "__v": 0
        },
        {
          "_id": "62f92cd7a297c855dc9e85a5",
          "user": "62f7e2a5a6104cc05d7b07ba",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-14T17:11:51.836Z",
          "__v": 0
        },
        {
          "_id": "62f92cd8a297c855dc9e85a7",
          "user": "62f7e2a5a6104cc05d7b07ba",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-14T17:11:52.030Z",
          "__v": 0
        },
        {
          "_id": "62f92cd7a297c855dc9e85a5",
          "user": "62f7e2a5a6104cc05d7b07ba",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-14T17:11:51.836Z",
          "__v": 0
        },
        {
          "_id": "62f92cd8a297c855dc9e85a7",
          "user": "62f7e2a5a6104cc05d7b07ba",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-14T17:11:52.030Z",
          "__v": 0
        },
        {
          "_id": "62f92cd8a297c855dc9e85a9",
          "user": "62f7e2a5a6104cc05d7b07ba",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-08-14T17:11:52.216Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;