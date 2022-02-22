import React from "react";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import "./About_us.css";
import Swiper from "./Swiper";

export default function Aboutus(){
  return (
    <>
    <Header/>
    <div className="images">
        <div className="Floating-caption">
           <p className="float_head"> About CUH  </p>
           <p className="float_txt">Central University of Haryana is a Central University established under the Central Universities Act, 2009 of the Parliament. It is one of the 15 Central Universities established by MHRD, GoI under the XIth Five Year Plan (2007-12). The University is fully funded by the UGC.</p>
           <p className="float_txt"><span className="ashish">Our Vision & Mission:</span><br/><br/>
Vision
To develop enlightened citizenship of a knowledge society for peace and prosperity of individuals, nation and the world, through promotion of innovation, creative endeavours, and scholarly inquiry.

Mission
To serve as a beacon of change, through multi-disciplinary learning, for creation of knowledge community, by building a strong character and nurturing a value-based transparent work ethics, promoting creative and critical thinking for holistic development and self-sustenance for the people of India. The University seeks to achieve this objective by cultivating an environment of excellence in teaching, research and innovation in pure and applied areas of learning.</p>
         </div>
        
    </div>
    <div className="new_margin">
      <h1>About CUH Internship Cell</h1>
      <p>The Internship Cell, Central University Of Haryana is a student run body headed by teacher convenors appointed by the college administration, working towards the common goal of providing students with a wide range of internship opportunities, thereby acting as a building block in enhancing their corporate proficiency and training them to step into the vast corporate world.

The Internship Cell is consistent with its commitment to discover new prospects and opportunities hence catering to the most imperative demand of college students</p>
    </div>
    <Swiper/>
    <Footer/>
    </>
    
  );
}

      
