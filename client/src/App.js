import './App.css';
import Login from "./components/Login";
import Register from './components/Register';
import { useState } from 'react';
import Home from './components/Home';


function App() {
  const[currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      {currentUser ? <Home currentUser={currentUser}/> : <Login setCurrentUser={setCurrentUser}/>}
      <Register setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
