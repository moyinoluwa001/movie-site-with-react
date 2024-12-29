import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';


const Register = ()=>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        email:'',
        firstName:'',
        lastName:''})


        const handleChange = (e)=>{
         const {name,value} = e.target;
         setFormData((prevData)=>({
            ...{prevData},
            [name]:value,
         }));
        }

        const handleRegister = ()=>{
            const newUserProfile = {
                username:formData.username,
                password:formData.password,
                email:formData.email,
                firstName:formData.firstName,
                lastName:formData.lastName,
            }

            console.log('new user profile created:',newUserProfile)

            navigate('/')
        }





        return(
            <div className="reg">
            <h3>Register</h3>

            <input type="text" 
                   name="username" 
                   placeholder="username" 
                   value={formData.username} 
                   onChange={handleChange} 
                   />

            <input type="password"
                   name="password"
                   placeholder="password"
                   value={formData.password}
                   onChange={handleChange}
            
            />

            <input type="email"
                   name="email"
                   placeholder="email"
                   value={formData.email}
                   onChange={handleChange}
            
            />

            <input type="firstName"
                   name="firstName"
                   placeholder="firstName"
                   value={formData.firstName}
                   onChange={handleChange}
            /> 

            <input
                   type="listName"
                   name="lastName"
                   placeholder="lastName"
                   value={formData.lastName}
                   onChange={handleChange}

            />  

            <button onClick={handleRegister}>Register</button>    
            
            </div>
        )


}

export default Register;