import React from 'react'
import './Footer.css';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsTwitter} from 'react-icons/bs';
import image1 from '../../../Front-Page/Images/cuh_logo.png';
const Footer = () => {
return (
    <div className= "main-footer">
    <div className="container">
     <div className="row">

 {/* /* col 1 */}
 <div className="col-1"> 
 <div className='logo'>
 <a href='https://www.cuh.ac.in//' target="_blank" style={{textDecoration:'none'}}>
     <img src={image1} style={{height:'130px', width: '130px', paddingLeft: '0.1px', marginTop: '30px'}}/>
     </a>
    </div> 
   
 <a href='https://www.cuh.ac.in//' target="_blank" style={{textDecoration:'none'}}>
   <h3>Central University of Haryana</h3>
 </a>

 </div>
 {/* col 2 */}
 <div className="col-2">
     <h4>About Us</h4>
     <ul className="list-unstyled">
         <li>Privacy Policy</li>
         <li>Terms and Conditions</li>
         <li>Services</li>
         <li>Campus Safety</li>
     </ul>
     <br></br>
              <div className='icons' style={{marginLeft: '35px'}}>
        <a href='https://www.facebook.com/centraluniversityofharyanaofficial/' target="_blank" style={{textDecoration:'none'}}> <FaFacebook/></a>
        <a href='https://www.youtube.com/channel/UC0bisUxVLYPfAihXJLnNRJg'target="_blank" style={{textDecoration:'none'}}><FaYoutube/></a>
        <a href='https://twitter.com/CUHofficial'target="_blank" style={{textDecoration:'none'}}><BsTwitter/></a>
        <a href='https://mail.google.com/mail/u/0/#inbox'target="_blank" style={{textDecoration:'none'}}><HiMail/></a>
     </div>
 </div>
 {/* col 3  */}
 <div className="col-3">
     <h4 >Explore</h4>
     <ul className="list-unstyled">
         <li>Home</li>
         <li>About</li>
         <li>Capabilities </li>
         <li>Careers</li>
              </ul> 
            </div>
          </div>
          
         
          <hr/>

         


          <div className="row">
           <p className="col-small">
               Copyright &copy;{new Date().getFullYear()} CUH | All right reserved <br></br>
              </p>
              <p className="creadits">Website Designed and Maintained by BytecodeLearners</p> 
          </div> 
           
      </div>
   </div>
)
}   

export default Footer;