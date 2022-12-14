function Login(){
    return(
        <div className="Login-form">
            <form>
                <label>Username:
                    <input type="text"></input>
                </label>
                
                <label>Password:
                    <input type="text"></input>
                </label>
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;