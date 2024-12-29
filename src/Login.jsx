import { useNavigate } from "react-router-dom";
import '../src/Login.css';

const Login = ()=>{
    const Navigate = useNavigate();
    const handleLogin = ()=>{
        Navigate('/MainPage')
    }
    
    return(
          <div className="log-b">
            <h1>Sporty Light Movie App</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="password" />
                <button onClick={handleLogin}>Login</button>
                <p>You don't have account? <a href="/Register">Register here</a> </p>
          </div>

    )



}

export default Login;