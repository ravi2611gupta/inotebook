import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "ravi",
        "class":"MCA"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(()=>{
            setState({
                "name":"Shiva",
                "class":"M. Tech"
            })
        }, 1000)
    }

    return(
        // <NoteContext.Provider value={state}> 
        // <NoteContext.Provider value={{state, update}}> //modern JavaScript syntax
        // <NoteContext.Provider value={{state:state, update:update}}>  // traditional JavaScript syntax
        <NoteContext.Provider value={{state, update}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;