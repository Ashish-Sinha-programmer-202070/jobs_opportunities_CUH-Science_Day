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
		<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
		<Footer/>
		</>
	)

}