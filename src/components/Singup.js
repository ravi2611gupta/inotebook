import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "http://localhost:5000";


function Singup(props) {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""})
  
  const changeListener = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // destructuring
  const {name, email, password} = credentials;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${host}/api/auth/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success===true){
      // save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      // Redirect
      navigate("/");
      props.showAlert("Login successfully", "success");
    }else{
      alert("Sorry, something went wrong! "+ json.error);
      props.showAlert("Invalid Credentials", "danger");
    }
      
  };



  return (
    <>
      <h2>Create a account to use iNotebook</h2>
      <div className="row mt-5">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" required minLength={5} onChange={changeListener} value={credentials.name} id="name" name='name' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" required onChange={changeListener} value={credentials.email} id="email" name='email' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" required minLength={5} onChange={changeListener} value={credentials.password} id="password" name='password'/>
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" required minLength={5} onChange={changeListener} value={credentials.cpassword} id="cpassword" name='cpassword'/>
            </div>
          
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Singup