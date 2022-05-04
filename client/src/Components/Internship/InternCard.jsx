import React from "react";
import { useNavigate } from "react-router-dom";
import './intern-card.css';
const InternCard = ({title,intern_id,batch_year,company_img,dept,date,apply_now})=>{
    const navigate = useNavigate();
    const handleLearnMore = ()=>{
        navigate(`/internshipdetails/${intern_id}`);
    }
    return(
        <div className="intern-card">
            <div className="img-details">
                <div className="image">
                    <img src={company_img?'http://localhost:5000'+company_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"} alt="google icon"/>
                </div>
                <div className="details">
                    <p className="title">{title}</p>
                    <p><b>Batch: </b> {batch_year?batch_year:2024}</p>
                    <p><b>Department: </b>{dept?dept:'BTECH CSE'}</p>
                    <p><b>Last Date: </b> {date}</p>
                    <div className="btns"><p><a href={apply_now} target='_blank'>Apply Now</a></p> <p onClick={handleLearnMore}>Learn More</p></div>
                </div>
            </div>
        </div>
    )
}

export default InternCard;