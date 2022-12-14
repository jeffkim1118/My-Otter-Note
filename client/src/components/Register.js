import { useState } from "react";

function Register({setCurrentUser}){
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[registerStatus, setRegisterStatus] = useState(Boolean)

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password
        }

        if(Object.values(newUser) === ""){
            setRegisterStatus(false);
        }else{
            setRegisterStatus(true);
            fetch(`http://localhost:3000/users`,{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser)
            })
            .then((r) => {
                if(r.ok){r.json().then((loggedIn) => setCurrentUser(loggedIn))}
            }).catch((error) => console.log(error))
        }
    }

    return(
        <div className="Registration-form">
            <form onSubmit={handleRegister}>
                <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>             
                <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>              
                <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>               
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register;