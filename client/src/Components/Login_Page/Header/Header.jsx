import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";
import cuh_logo from '../../../Front-Page/Images/cuh_logo.png';

export default function Header() {
  return (
    // <header className="Header">
     
    //   <nav className="Nav">

    //     <a  className="Box logo" href="/"> <img src= {cuh_logo} alt="cuh_logo" /></a>
    //     <div className="header-options">

    //     <a  className="Box" href="/"><Link to='/home'>Home</Link></a>
    //     <a  className="Box" href="/"> <Link to='/process'>Process</Link></a>
    //     <a  className="Box" href="/"> <Link to='/internship'>Internship</Link></a>
    //     <div className="dropdown">
    //       <button className="dropbtn">Departement</button>
    //       <div className="dropdown-content">
    //         <a href="#">Link 1</a>
    //         <a href="#">Link 2</a>
    //         <a href="#">Link 3</a>
    //       </div>
    //     </div>
    //     {/* <a  className="Box" href="/"></a> */}
    //     <a  className="Box" href="/"><Link to='/about' style={{TextDecoration: 'none'}}>About US</Link></a>
    //     <a  className="Box" href="/">Contact US</a>
    //     <div className="button">
    //     <button className="button button2"><Link to='/Login'>Login</Link> </button>
    //     <span>|</span><button className="button button2"><Link to='/SignUp'>SignUp</Link></button>
    //     </div>
    //     </div>
    //   </nav>
    // </header>
    <nav class="cla navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand Box logo" href="#"><img src= {cuh_logo} alt="cuh_logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse aac navbar-collapse " id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="#">Process</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link">Internship</a>
        </li>       
        <li class="nav-item">
          <a class="nav-link">Contact us</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link"></a>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button class="btn btn-success" type="submit">Login</button>
        <button className="btn btn-success sig" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
    
  );
  
}