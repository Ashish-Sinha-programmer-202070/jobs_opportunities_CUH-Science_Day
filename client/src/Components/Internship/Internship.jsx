import React from "react";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import "./Internship.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
export default function Internship(){
    const [interns,setInterns] = useState([]);
    useEffect(async()=>{
        const res = await axios.get('http://localhost:5000/get/internships');
        setInterns(res.data.data);
    },[]);
    return(
        <>
        <Header/>
            <div className="imagei">
                <div className="floating-caption">
                <p className="float_head"> Internship </p>
           <p className="float_txt">Central University of Haryana</p>

                </div>

            </div>
            <div className="internbox">
            <h1>Internship Details </h1>
            <div className="box">
                {interns.map((intern,idx)=>{
                    return(
                    <>
                        <div className="details">
                            <div className="title">
                                <h2>Title</h2>
                            <p>   
                            {intern.title}
                            </p>
                            </div>
                            <div className="company">
                            <p>

                            {intern.company}
                            </p>
                            </div>
                            <div className="description">
                            <p>    
                            {intern.description}
                            </p>
                            </div>
                            <p>
                            {intern.skill_set}
                            </p>
                            <p>
                            {intern.deadline}

                            </p>
                            <p>
                            {intern.offcial_link}

                            </p>
                            <p>
                            {intern.on_campus}

                            </p>
                        </div>  
                    </>     
                    );
                })}
                

                <div className="Internship-Card">
                {/* <InternshipCard feature="Read Online" img={read_book} details="You can read those books online with out need to download them."/> */}
                {/* <InternshipCard feature="Add to Collection"  details="Save the books that you like and read them later."/> */}
                </div>

            
            </div>
            </div>
        <Footer/>
        </>
    )
}