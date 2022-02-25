import React from "react";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import axios from "axios";
import './Internship.css';
import imgFrame from '../../Front-Page/Images/imgframe.png'
import { useEffect } from "react";
import { useState } from "react";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
export default function Interns(){
	const [interns,setInterns] = useState([]);
    useEffect(async()=>{
        const res = await axios.get('http://localhost:5000/get/internships');
        setInterns(res.data.data);
    },[]);
	return(
		<>
		<Header/>
    <div id="internship-image"></div>
        {interns.map((intern)=>{
            return(
		<div className="Cards">
            <p></p>
        
        <div className="card" style={{width: "18rem",}}>
            <img className="card-img-top" src={imgFrame} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{intern.title}</h5>
                <p className="card-text">{intern.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li className="list-group-item">{intern.company}</li>
                <li className="list-group-item">
                    {intern.deadline}</li>
                <li className="list-group-item">
                { intern.on_campus == "yes" ?
                <p>On-Campus</p>
                :
                <p>Off-Campus</p>
        }
        {/* {intern.on_campus} */}
        </li>
            </ul>
            <div className="card-body">
                {/* <a href="#" className="card-link">Card link</a> */}
                <a href="{intern.official_link}" className="card-link">Official link</a>
            </div>
            </div>
         
        </div>
        
            );
        })}
 
        
		<Footer/>
		</>
	)

}