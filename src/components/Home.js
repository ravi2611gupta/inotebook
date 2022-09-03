import React from 'react'
import Notes from './Notes'
// import noteContext from '../context/notes/noteContext'
function Home() {
  // const first = useContext(second)

  // const context = useContext(noteContext)
  // const {notes, setNotes} = context;
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
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      <Notes/>
     
    </>
  )
}

export default Home