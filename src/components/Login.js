import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "http://localhost:5000";

function Login(props) {

  const [credentials, setCredentials] = useState({email:"", password:""})
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch(`${url}/api/auth/login`);

    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password:credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success === true){
      // save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      // Redirect
      navigate("/");
      props.showAlert("Login successfully", "success"); 
    }else{
      // alert("Invalid Credentials");
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const changeListener = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Login to continue to iNotebook</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-5"
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={changeListener}
            value={credentials.email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={changeListener}
            value={credentials.password}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
