// import  React from 'react';
import React, {useState,useEffect} from "react";
import axios from "axios";
import './LoginPage.css';
import {Link} from 'react-router-dom';
import login_img from './Images/cuh_logo.png';
import { useNavigate} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";



// useEffect(async() => {
//     async function postData(){
//         const res = await axios.post(`http://localhost:5000/auth/login`,{})
//     }
// }
// );
const LoginPage = () =>{
    const navigate = useNavigate();
    const [emailId, setEmailId]  = useState('');
    const [password, setPassword] = useState('');
    const {isLogged,setLogged} = useContext(AuthContext);
    useEffect(()=>{
        if(isLogged){
            navigate('/');
        }
    },[]);
   
    const handleViewPassword=()=>{
        let password = document.getElementById("password");
        let eye = document.querySelector('.input-pass');
        eye.classList.replace('fa-eye-slash','fa-eye')
        if (password.type === 'password'){
            password.type = 'text';
        }else{
            eye.classList.replace('fa-eye','fa-eye-slash');
            password.type = 'password';
        }
        
    }

    const handleLogin = async()=>{
        const email = document.getElementById('e_mail').value;
        const password = document.getElementById('password').value;
        if(email === '' || password===''){
            alert("Input fields are empty");
        }else{
            const res = await axios.post('http://localhost:5000/auth/login',{'email':email,'password':password});
            if(res.data.status === 'success'){
            localStorage.setItem('token',res.data.token);
            // alert("Logged in")
            setLogged(true);
            navigate('/dashboard')}
            else {
            alert(res.data.msg);
            }
        }
    }
    return ( 
        <div className="login-page-container">
            <div className="login-page">
                <img  src={login_img} alt="person unlocking a lock"  />
                <div className="login-form">
                    <form onSubmit={(e)=>{e.preventDefault();}} autoComplete="off">
                     <p id="welcome">Welcome Back!</p>
                        {/* <Logo/> */}
                        <h1>Admin Login</h1>
                        <h2>Login to your account</h2>
                        <input 
                            type="email" 
                            name="e_mail" 
                            id="e_mail" 
                            placeholder="E-Mail"
                            onChange={(e)=> setEmailId(e.target.value)}
                            value={emailId}
                         />
                        <div className="login-password">
                            <input 
                               type="password" 
                               name="password" 
                               id="password" 
                               placeholder="Password"
                               onChange={(e)=>setPassword(e.target.value)}
                               value={password} 
                            />
                            <i onClick={handleViewPassword} className="fas fa-eye-slash input-pass"></i>
                        </div>
                      <input type="submit" onClick={handleLogin}  value="Log In"/>
                        
                        <p id="new-here">
                        <Link to='/SignUp'>New Here? sign-up instead</Link>
                            </p>
                        <p id="forget-password">Forget Password?</p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;







