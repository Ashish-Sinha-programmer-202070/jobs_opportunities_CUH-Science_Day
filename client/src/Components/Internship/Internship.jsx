import React from "react";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import axios from "axios";
import "./Internship.css";
import imgFrame from "../../Front-Page/Images/google-logo.jpeg";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Interns() {
  const [interns, setInterns] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/get/internships");
    setInterns(res.data.data);
  }, [setInterns]);
  return (
    <>
      <Header />
      <div id="internship-image"></div>
      {interns.map((intern) => {
        return (
        //   <div className="Cards">
        //     <div className="card">
        //       <img
        //         className="card-img-top"
        //         src={imgFrame}
        //         alt="Card image cap"
        //       />
        //       <div className="card-body">
        //         <h5 className="card-title">{intern.title}</h5>
        //         <p className="card-text">{intern.description}</p>
        //         <ul class="list-group list-group-flush">
        //           <li className="list-group-item">{intern.company}</li>
        //           <li className="list-group-item">{intern.deadline}</li>
        //           <li className="list-group-item">
        //             {intern.on_campus == "yes" ? (
        //               <p>On-Campus</p>
        //             ) : (
        //               <p>Off-Campus</p>
        //             )}
        //           </li>
        //         </ul>
        //         <a href="{intern.official_link}" className="card-link">
        //           Official link
        //         </a>
        //       </div>
        //     </div>
        //   </div>
        <div className="tiles-container mt-4">
             <div className="tiles">
               <div className="profile-image">
                 <Link to="/virtual-courses/:id"><img src={imgFrame} alt="profile"/></Link>
               </div>
               <div className="details">
                 <div className="category"><Link className="link" to="/internship"><h2><b>Job Title:</b> {intern.title}</h2></Link></div>
                 <div className="category"><Link className="link" to="/internship"><h2><b>Description:</b> {intern.description}</h2></Link></div>
                 <div className="category"><Link className="link" to="/internship"><h2><b>Skills Required:</b> {intern.skill_set}</h2></Link></div>
                 <div className="category"><Link className="link" to="/internship"><h2><b>Company:</b> {intern.company}</h2></Link></div>
                 <div className="category"><Link className="link" to="/internship"><h2><b>Deadline:</b> {intern.deadline.slice(0,10)}</h2></Link></div>
                 {/* <div className="category"><Link className="link" to="/internship"><h2>{intern.offcial_link}</h2></Link></div> */}

                 {/* <Link className="link" to="/virtual-courses/:id"><h1 className="title">{intern.description}</h1></Link> */}
                 {/* <div className="specifications">
                   <div className="specification-name">
                    <p>  {intern.duration}</p>
                   </div>
                   <div className="specification-name">
                     <p>  {intern.level}</p>
                   </div>
                   <div className="specification-name">
                     <p>  {intern.lesson}</p>
                   </div>
                   <div className="specification-name">
                     <p> {intern.quizzes}</p>
                   </div>
                   <div className="specification-name">
                     <p>  {intern.students}</p>
                   </div>
                 </div> */}
                 {/* <p className="description">{intern.company}</p> */}
                 {/* <p className="description">{intern.deadline}</p> */}
                 <div className="button-group">
                   <p>{intern.price}</p>
                   <button className="button">
                      <a href={intern.offcial_link}>View More</a> </button>
                 </div>
               </div>
             </div>
           </div>
        );
      }
      )}

      <Footer />
    </>
  );
}
