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
            fetch(`/users`,{
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
            {registerStatus === false ? <div><p>Registration failed!</p></div> : <div><p>Registration complete!</p></div>}
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