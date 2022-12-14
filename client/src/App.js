import './App.css';
import Login from "./components/Login";
import Register from './components/Register';
import { useState } from 'react';


function App() {
  const[currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      <Login setCurrentUser={setCurrentUser}/>
      <Register setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
