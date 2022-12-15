import {useState, useEffect} from 'react';

function Login({setCurrentUser}){
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        if(!Object.values(user)){
            console.log("Enter valid username and password!")
        }else{
            fetch(`http://localhost:3000/login`,{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            }).then((user) => user.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
        }
    }

    return(
        <div className="Login-form">
            <form onSubmit={handleLogin}>
                <label>Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </label>
                
                <label>Password:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;