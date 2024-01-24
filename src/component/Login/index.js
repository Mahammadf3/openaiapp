import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const[name,setName]=useState(false)
  const navigate = useNavigate(); 

  const submitLogin = (event) => {
    event.preventDefault();
    if (mail.includes("@gmail.com") && password.length > 3) {
      navigate("/Home"); 
    }else{
        setName(true)
    }
  };

  const getName = (event) => {
    setMail(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="LoginContainer">
      <form onSubmit={submitLogin} className="formContainer">
        
        <p>Enter your Mail</p>
        <input type="email" onChange={getName} placeholder="Email(It includes @gmail.com)" className="textContainer"/>
      
     
        <p>Enter the password</p>
        <input type="password" onChange={getPassword} placeholder="Password(It contain atleast 4 numbers)" /><br/>
    
        <button type="submit" className="submitButton">Sign In</button>
      </form>
      {name && <p className="passage">Enter Valid Details</p>}
    </div>
  );
};

export default Login;
