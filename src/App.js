//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import Graph from './components/Graph';
// import MainCom from './components/MainCom';
//import ButtonHandler from './components/ButtonHandler';
//import Details from './components/Details';
//import TestFetch from './components/TestFetch';
import Fetchdata2 from './components/Fetchdata2';
//"homepage" : "http://ManishRahul.github.io/reactdeploy",
//"predeploy": "npm run build",
  //  "deploy": "gh-pages -d build",
function App() {
  
  
  //const [user1,setUser1] = useState({name1:"", email1 : ""});
  

   
    return (
    <div className="App">
      <Fetchdata2></Fetchdata2>
      {/* <TestFetch></TestFetch> */}
   {/* <MainCom></MainCom> */}
{/* <Details></Details> */}
{/* <ButtonHandler></ButtonHandler> */}
     
    </div>
  );
}

export default App;