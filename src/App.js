import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Graph from './components/Graph';

import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email1 : "MICKY",
    password1 : "98765",
    email2 : "r@gmail",
    password2 : "321"
  }
  //const [user1,setUser1] = useState({name1:"", email1 : ""});
  const [user1,setUser1] = useState({ email1 : ""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email1 && details.password == adminUser.password1) {
      console.log("Logged in");
      setUser1({
       // name1: details.name,
        email1: details.email
      })
    } 
    else {
      console.log("Details don't match");
      setError("Details don't match");
    }

   }

   const Logout = () => {
    // setUser1({name1:"", email1 : ""});
    setUser1({ email1 : ""});
   }
    return (
    <div className="App">
   
      {(user1.email1 != "") ? (
       <div className="welcome">
         <h2>Welcome <span>{user1.email1} !!</span></h2>

         <Graph> </Graph> <br></br>
         
         <button onClick={Logout}>Logout</button>
         </div>
     ) : (
       <LoginForm Login={Login} error={error} />
     )}
     
    </div>
  );
}

export default App;