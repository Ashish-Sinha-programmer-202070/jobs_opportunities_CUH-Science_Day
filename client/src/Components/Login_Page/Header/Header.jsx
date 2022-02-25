import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import cuh_logo from '../../../Front-Page/Images/cuh_logo.png';
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [isLogged,setLogged] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
        setLogged(true);
    }
},[]);
  return (   
    <nav class="cla navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand Box logo" href="#"><img src= {cuh_logo} alt="cuh_logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse aac navbar-collapse " id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to='/home'>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="#"> <Link to='/process'>Process</Link></a>
        </li>
        <li class="nav-item ">
        <a class="nav-link"> <Link to='/internship'>Internships</Link></a>
        </li>       
        <li class="nav-item">
          <a class="nav-link"><Link to='/contact' style={{TextDecoration: 'none'}}>ContactUS</Link></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link"><Link to='/about' style={{TextDecoration: 'none'}}>About US</Link></a>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        {!isLogged?
        <>
        <button class="btn btn-success" type="submit"><Link to='/front'>Login</Link> </button>
        <button className="btn btn-success sig" type="submit"><Link to='/signup'>SignUp</Link> </button>
        </>
        : 
        <>
        <button class="btn btn-success" type="submit"><Link to='/dashboard'>Dashboard</Link> </button>
        <button class="btn btn-success" type="submit"><Link to='/'>Logout</Link> </button>
        </>
      }
      </form>
    </div>
  </div>
</nav>
    
  );
}
