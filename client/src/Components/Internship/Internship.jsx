import React from "react";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import axios from "axios";
import "./internship-detail.css"
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
        <div className="imageii">
        {/* <img id="internship-img" src="https://www.redbackstudios.in/images/content/internship-in-vellore.jpg" /> */}
        </div>
		<div className="Cards">
            <p></p>
        
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://logodix.com/logo/733241.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            </div>
        </div>
 
        
		<Footer/>
		</>
	)

}