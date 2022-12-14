import { useState } from "react";

function Register({setCurrentUser}){
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleRegister = (e) =>{
        e.preventDefault();
        
    }

    return(
        <div className="Registration-form">
            <form onSubmit={handleRegister}>
                <label>Username:
                    <input type="text" value={username} onChange={setUsername((e) => e.target.value)}></input>
                </label>
                
                <label>Email:
                    <input type="text" value={email} onChange={setEmail((e) => e.target.value)}></input>
                </label>
                
                <label>Password:
                    <input type="text" value={password} onChange={setPassword((e) => e.target.value)}></input>
                </label>
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register;