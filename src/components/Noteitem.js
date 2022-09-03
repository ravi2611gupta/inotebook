import React from 'react'

function Noteitem(props) {

    const {note} = props;

  return (
    <div className='col-md-3 mt-4'>
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{note.title}</h5>
            <p class="card-text">{note.description}</p>
        </div>
        </div>
    </div>
  )
}

export default Noteitem