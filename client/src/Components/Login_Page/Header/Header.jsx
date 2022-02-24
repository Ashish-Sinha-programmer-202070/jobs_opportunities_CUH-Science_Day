import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import cuh_logo from "../../../Front-Page/Images/cuh_logo.png";

export default function Header() {
  return (
    <nav className="navbar ">
      
          <ul className="unOrderList">
          <li className="listNode">

          
          <img src={cuh_logo} alt="cuh_logo" className="cuh_logoHeader" />
        
        </li>
            <li className="listNode" >
              
                <Link to="/home" className="tabs">Home</Link>
              
            </li>
            <li className="listNode" >
              

                <Link className="tabs" to="/process">Process</Link>
              
            </li>
            <li className="listNode" >
                <Link className="tabs" to="/internship">Internships</Link>
            </li>
            <li className="listNode">
                <Link className="tabs" to="/contact" >
                  ContactUS
                </Link>
            </li>
            <li className="listNode ">
                <Link className="tabs" to="/about" >
                  About US
                </Link>
            </li>
          </ul>
         
          <button  type="submit" className="btnLgnSgn">
            <Link className="tabs" to="/front">Login</Link>{" "}
          </button>
          <button  type="submit" className="btnLgnSgn">
            <Link className="tabs" to="/signup">SignUp</Link>{" "}
          </button>
         
    </nav>
  );
}
