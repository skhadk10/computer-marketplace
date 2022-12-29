import React, { useState, useEffect } from "react";
import { auth } from "../../firebase.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log("hello",window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href)
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if(!email || !password)
    {
      toast.error('Email and password is required')
      return
    }
    if(password.length<6){
      toast.error('Password must be at least 6 characters long')
      return
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      console.log("Result", result);
      if (result.user.emailVerified) {
        // remove user email for local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);

      
      const idTokenResult=await user.getIdTokenResult()
        // redux store
        console.log("user",user,"idTokenResult",idTokenResult);
        // redirect
        // history.push('/')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const CompleteRegistrationForm = () => {
    return (
      <form onSubmit={handlesubmit}>
        <input type="text" className="form-control" value={email} disabled />
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          placeholder="Enter Your Passowrd"
        />
        <br />
        <button type="submit" className="btn btn-raised">
          Complete Register
        </button>
      </form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {CompleteRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
