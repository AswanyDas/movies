import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState('fcsuser');
    const [password, setPassword] = useState('fcs123');
    const [errorMsg, setErrorMsg] = useState(false);


    const navigate = useNavigate();

    const login = (e) => {

        e.preventDefault();

        if (username === 'fcsuser' && password === 'fcs123') {
            navigate(`/movies`);
        } else {
            if (errorMsg === false) {
                setErrorMsg(true);
            }
        }
        
    }

    return (
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" value={username} required onChange={(e) => setUsername(e.target.value)} />
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={password} required onChange={(e) => setPassword(e.target.value)} />
            {errorMsg && <div class="alert success">
                <strong>Login Failed</strong> Please enter correct Username/Password</div>}
            <button type="submit" onClick={(e) => login(e)}>Login</button>
        </div>
    )
}

export default Login;