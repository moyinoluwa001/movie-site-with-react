// import { useNavigate } from "react-router-dom";
// import '../src/Login.css';

// const Login = ()=>{
//     const Navigate = useNavigate();
//     const handleLogin = ()=>{
//         Navigate('/MainPage')
//     }
    
//     return(
//           <div className="log-b">
//             <h1>Sporty Light Movie App</h1>
//                 <input type="text" placeholder="Username" />
//                 <input type="password" placeholder="password" />
//                 <button onClick={handleLogin}>Login</button>
//                 <p>You don't have account? <a href="/Register">Register here</a> </p>
//           </div>

//     )



// }

// export default Login;

import { useNavigate } from "react-router-dom";
// import '../src/Login.css';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Save a dummy user profile in localStorage
        localStorage.setItem('userProfile', JSON.stringify({ username: 'user' }));
        navigate('/MainPage'); // Navigate to the MainPage
    };

    return (
        <div className="log-b">
            <h1>Sporty Light Movie App</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>You don't have an account? <a href="/Register">Register here</a></p>
        </div>
    );
};

export default Login;