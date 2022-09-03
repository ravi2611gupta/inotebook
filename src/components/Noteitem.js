import React from 'react'

function Noteitem(props) {

    const {note} = props;

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
                    <i className=" fa-solid fa-trash-can mx-2"></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Noteitem