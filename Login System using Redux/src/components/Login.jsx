import React, { useState } from "react";

// e which is short for event. To understand what is event ==> 

//           onChange={(e) => setName(e.target.value)}         to       onChange={(e) => console.log(e)}.  and type name, email  .........
//  
//  Inspect the log and you'll find a list of events in which one of them is target.== 
//there the target is : "target :name"
//  you will find "name" => click on the "name"  =>you will direct you to input field and there you will find value which gonna type




import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="login">
      <form className="login-form">
        <h1>Login Here 💻 </h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange=
          // {(e) => {console.log(e);} 
          {(e) => {setName(e.target.value)} 
            
          }
          />
          
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
  
}

export default Login;
