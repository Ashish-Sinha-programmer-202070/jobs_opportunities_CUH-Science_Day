import React from "react";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import "./internship-detail.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
export default function InternshipDetail(){
    const [interns,setInterns] = useState([]);
    useEffect(async()=>{
        const res = await axios.get('http://localhost:5000/get/internships');
        setInterns(res.data.data);
    },[]);
    return(
        <>
        <Header/>
            <div className="imagei">
            <img id="company-img" src="https://logodix.com/logo/733241.png" />
            </div>
            <div className="internbox">
            <h1><b>Company Name </b></h1>
            <div className="box">
     
            <div class="alert " role="alert">
  <h4 class="alert-heading"><b>About Company</b></h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde impedit minus dolorem non. Magnam fuga eveniet, fugit dolores modi molestias saepe similique nisi tempore in nulla sunt, vel neque!</p>
  <h4 class="alert-heading"><b>Job Description</b></h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima similique id culpa aspernatur! Tempora doloribus commodi voluptates dignissimos pariatur aut necessitatibus laborum, at officiis atque quas, ex magnam ad error.</p>
  <h4 class="alert-heading"><b>Requirement</b></h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit doloremque sunt, ratione vitae facilis voluptate totam cumque modi enim incidunt fuga quos nobis saepe? Qui ab dignissimos quibusdam incidunt.</p>
  <h4 class="alert-heading"><b>Perks & Benifits</b></h4>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quisquam voluptate quia excepturi iste perspiciatis suscipit quibusdam quaerat dignissimos soluta ullam reprehenderit voluptates doloribus, vero voluptas laboriosam eius illo. Qui .</p>
  <div id="apply-row">
    <div></div>
    <button type="button" class="btn btn-primary btn-lg">Apply Now</button>
  </div>
     
  </div>
    
            
            </div>
            </div>
        <Footer/>
        </>
    )
}