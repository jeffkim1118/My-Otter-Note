import './App.css';
import Login from "./components/Login";
import Register from './components/Register';
import { useState,useEffect } from 'react';


function App() {
  const[currentUser, setCurrentUser] = useState()
  
  return (
    <div className="App">
      <Login />
      <Register setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
