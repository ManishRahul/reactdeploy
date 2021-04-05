import React, {useState} from 'react';

import Graph from './Graph';
import FunDetails from './FunDetails';

import LoginForm from './LoginForm';
//"homepage" : "http://ManishRahul.github.io/reactdeploy",
//"predeploy": "npm run build",
  //  "deploy": "gh-pages -d build",
function MainCom() {
  const adminUser = {
    email1 : "MICKY",
    password1 : "98765",
    email2 : "John",
    password2 : "321"
  }
  const [user1,setUser1] = useState({ email1 : ""});
  const [user2,setUser2] = useState({ email2 : ""});
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
    else if (details.email == adminUser.email2 && details.password == adminUser.password2) {
      console.log("Logged in");
      setUser2({
       // name1: details.name,
        email2: details.email
      })
    } 
    else {
      console.log("Details don't match");
      setError("Details don't match");
    }

   }

   const Logout = () => {
    setUser1({ email1 : ""});
    setUser2({ email2 : ""});
   }

if(user1.email1 != "") {
    return (
    <div className="MainCom">
    <div className="welcome">
         <h2>Welcome <span>{user1.email1} !!</span></h2>

         <Graph> </Graph> <br></br>
         
         <button onClick={Logout}>Logout</button>
         </div>
   {/* { if(user1.email1 != "")
   {
    <div className="welcome">
    <h2>Welcome <span>{user1.email1} !!</span></h2>

    <Graph> </Graph> <br></br>
    
    <button onClick={Logout}>Logout</button>
    </div>
   } } */}
      {/* {(user1.email1 != "" || user2.email2 != "") ? (
       <div className="welcome">
         <h2>Welcome <span>{user1.email1} !!</span></h2>

         <Graph> </Graph> <br></br>
         
         <button onClick={Logout}>Logout</button>
         </div>
     ) : (
       <LoginForm Login={Login} error={error} />
     )} */}
     
    </div>
  );}
  else if(user2.email2 != ""){
    return (
      <div className="MainCom">
      <div className="welcome">
           <h2>Welcome <span>{user2.email2} !!</span></h2>
  
           <FunDetails> </FunDetails>
           
           <button onClick={Logout}>Logout</button>
           </div>
           </div>
  );
  }
  else{
    return(
      <LoginForm Login={Login} error={error} />
    )
  }

}

export default MainCom;