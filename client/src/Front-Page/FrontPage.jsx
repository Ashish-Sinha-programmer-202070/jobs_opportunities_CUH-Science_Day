import React from 'react';
import {Link} from 'react-router-dom';
import cuh_logo from './Images/cuh_logo.png';
import './Styles/Front-Page.css';
import { FaUserTie,FaUserGraduate } from "react-icons/fa";

const FrontPage = () => {
    return ( 
        <div className="front-page">
            
                <h1>Internship Cell</h1>

            <img src= {cuh_logo} alt="cuh_logo" />
            <p className="clg-name">CENTRAL UNIVERSITY OF HARYANA</p>
            <div className="login-opts">
                <div className='login-btn' id="admin">
                    <FaUserTie className='fa-icons'/>
                    <Link to='/adminlogin'>
                    <p>Admin Login</p>
                    </Link>
                </div>
                <div className='login-btn' id="students">
                    <FaUserGraduate className='fa-icons'/>
                    <Link to='/login'>
                    <p>Student Login</p>
                    </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default FrontPage;