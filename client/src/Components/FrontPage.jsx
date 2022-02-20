import React from 'react';
import cuh_logo from '../Images/cuh_logo.png';
import '../Styles/front-page.css';
import { FaUserTie,FaUserGraduate } from "react-icons/fa";
const FrontPage = () => {
    return ( 
        <div className="front-page">
            <h1>Internship Cell</h1>
            <img src= {cuh_logo} alt="cuh_logo" />
            <p className="clg-name">CENTRAL UNIVERSITY OF HARYANA</p>
            <div className="login-opts">
                <div className="admin">
                    <FaUserTie className='fa-icons'/>
                    <p>Admin Login</p>
                </div>
                <div className="students">
                    <FaUserGraduate className='fa-icons'/>
                    <p>Student Login</p>
                </div>
            </div>
        </div>
     );
}
 
export default FrontPage;