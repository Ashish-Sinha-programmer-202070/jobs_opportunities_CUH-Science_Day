import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";
import cuh_logo from '../../../Front-Page/Images/cuh_logo.png';

export default function Header() {
  return (
    <header className="Header">
     
      <nav className="Nav">

        <a  className="Box logo" href="/"> <img src= {cuh_logo} alt="cuh_logo" /></a>
        <div className="header-options">

        <a  className="Box" href="/"><Link to='/home'>Home</Link></a>
        <a  className="Box" href="/"> <Link to='/process'>Process</Link></a>
        <a  className="Box" href="/"> <Link to='/internship'>Internship</Link></a>
        <div className="dropdown">
          <button className="dropbtn">Departement</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        {/* <a  className="Box" href="/"></a> */}
        <a  className="Box" href="/"><Link to='/about' style={{TextDecoration: 'none'}}>About US</Link></a>
        <a  className="Box" href="/">Contact US</a>
        <div className="button">
        <button className="button button2"><Link to='/Login'>Login</Link> </button>
        <span>|</span><button className="button button2"><Link to='/SignUp'>SignUp</Link></button>
        </div>
        </div>
      </nav>
    </header>
    
  );
  
}
