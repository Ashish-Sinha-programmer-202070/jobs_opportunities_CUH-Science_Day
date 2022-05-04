import React from "react";
import "./Process.css";

import image1 from "../../Front-Page/Images/internship-process.png";
import Header from "../Login_Page/Header/Header";
import Footer from "../Login_Page/Footer/Footer";
function Process() {
  return (
    <div className="process">
      <div className="imagea">
        <div className="Floating-captionx">
          <p className="float_heada"> JOB OPPORTUNITIES </p>
          <p className="float_txta">
            <span>→ Pre Internship Talk</span> <br></br> <hr></hr>
            <span>→ Submission of CV's</span> <br></br> <hr></hr>
            <span>→ Group Discussions and Tests</span> <br></br> <hr></hr>
            <span>→ Interviews</span> <br></br> <hr></hr>
            <span>→ Final Offer</span>
          </p>
        </div>
      </div>
      <div className="roadmap">
        <img src={image1} />
      </div>

      <Footer />
    </div>
  );
}

export default Process;
