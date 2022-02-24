import { useState } from 'react';
import './ContactUS.css';
import members from './members';
import Header from '../Login_Page/Header/Header';
import Footer from '../Login_Page/Footer/Footer';
const ImgCircle = (props) => {
  return (
  <>    
    
    <div className="con_img_des">
      <div className="con_image">
        <img src={props.img} alt="profice picture" />
      </div>
      <p className="detail_member">{props.des}</p>
      <p className='deeg_member'>{props.deg}</p>
      <p className='deeg_member_num'>{props.mob}</p>
    </div>
   </> 
  );
}
function Contact() {
  const [people, changePeople] = useState(members.filter((member, index) => { return member.role == "teacher" }));

  return (
<>
<Header/>  
    <div className="body">
      <div className='img'>
        <div className='float_div'>
          <div className='floatdiv'>
            <h1 className='head'>Meet our great team</h1>
            <p className='info'>→Email: cuh@gmail.com</p>
            <p className='info'>→Website link: www.cuh.ac.in</p>
            <p className='info'>→Mobile Number: +91 96314671452</p>
          </div>
        </div>
      </div>
      <div className="con_profile">
        {people.map((member, index) => {
          return <ImgCircle img={member.img} des={member.des} deg={member.deg} mob={member.mob} key={index} />
        })}
      </div>
      <div>

      </div>




    </div>
   <Footer/> 
</>   
  );
}

export default Contact;