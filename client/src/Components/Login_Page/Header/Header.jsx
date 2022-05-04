import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import "./Header.css";
import cuh_logo from '../../../Front-Page/Images/cuh_logo.png';
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const {isLogged,setLogged,user,setUser} = useContext(AuthContext);

  useEffect(async()=>{
    if(localStorage.getItem('token') !== null){
      setLogged(true);
    }
    const res = await axios.post('http://localhost:5000/auth/verify',{'token':localStorage.getItem('token')});
    // console.log(res.data);
    if(res.data.status === 'success'){
      const user_id = res.data.user_id;
      const user = await axios.get(`http://localhost:5000/auth/user/${user_id}`);
      setUser(user.data.data[0]);
      // console.log(user.data.data[0])
    }

},[]);
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/');
    setLogged(false);
  }
  return (
   
    <nav className="cla navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link className="navbar-brand Box logo" to="/"><img src= {cuh_logo} alt="cuh_logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse aac navbar-collapse " id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to='/home'>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="#"> <Link to='/process'>Process</Link></a>
        </li>
        <li className="nav-item ">
        <a className="nav-link"> <Link to='/internship'>Opportunities</Link></a>
        </li>       
        <li className="nav-item">
          <a className="nav-link"><Link to='/contact' style={{TextDecoration: 'none'}}>ContactUS</Link></a>
        </li>
        <li className="nav-item ">
          <a className="nav-link"><Link to='/about' style={{TextDecoration: 'none'}}>About US</Link></a>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        {!isLogged?
        <>
        <button className="btn btn-success" type="submit"><Link to='/front'>Login</Link> </button>
        <button className="btn btn-success sig" type="submit"><Link to='/signup'>SignUp</Link> </button>
        </>
        : 
        <>
        {user.isadmin?
        <button className="btn btn-success" type="submit"><Link to='/dashboard'>Dashboard</Link> </button>:null}
        <button className="btn btn-success" onClick={handleLogout} type="submit"><Link to='/'>Logout</Link> </button>
        </>
      }
      </form>
    </div>
  </div>
</nav>
    
  );
}
