import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { Register } from './register';
function App() {
const [currentform,setCurrentform] = useState("login");

const toggleform = (form)=>{
  setCurrentform(form);
}

  return (
    <div className="App">
    {
      currentform == "login" ? <Login ontoggle={toggleform}/> : <Register ontoggle ={toggleform}/>
    }
    </div>
  );
}


export default App;
