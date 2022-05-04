import React from "react";
// import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
import "./internship-detail.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;
export default function InternshipDetail() {
  const { intern_id } = useParams();
  const [intern, setIntern] = useState(null);
  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:5000/get/intership/${intern_id}`
    );
    setIntern(res.data.data[0]);
    console.log(res.data.data[0]);
  }, []);
  return (
    <>
     
      <div className="imagei">
        <img id="company-img" src={intern?'http://localhost:5000'+intern.company_img:null} />
      </div>
      <div className="internbox">
        <h1><b>{intern?intern.company:null} </b></h1>
        <div className="box">
          <div class="alert " role="alert">
            <h4 class="alert-heading">
              <b>About Company</b>
            </h4>
            <p>{intern ? intern.description : null}</p>
            <h4 class="alert-heading">
              <b>Job Title</b>
            </h4>
            <p>
              {intern?intern.title:null}
            </p>
            <h4 class="alert-heading">
              <b>Requirement</b>
            </h4>
            <p>{intern ? intern.skill_set : null}</p>
            <h4 class="alert-heading">
              <b>Perks & Benifits</b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              quisquam voluptate quia excepturi iste perspiciatis suscipit
              quibusdam quaerat dignissimos soluta ullam reprehenderit
              voluptates doloribus, vero voluptas laboriosam eius illo. Qui .
            </p>
            <div id="apply-row">
              <div></div>
              <button type="button" class="btn btn-primary btn-lg"> <a href={intern?intern.offcial_link:null} target='_blank' style={{color:"white"}}>Apply Now</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
