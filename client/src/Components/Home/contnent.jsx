import './contnent.css';
import members from './members';
import Header from '../Login_Page/Header/Header';
import Footer from '../Login_Page/Footer/Footer';
import {Fragment, useState} from 'react';
const ImgCircle = (props)=>{
    return(
        <div className="con_img_des">
            <div className="con_image">
                <img src={props.img} alt="profice picture"/>
            </div>
            <p className="detail_member">{props.des}</p>
        </div>
    );
}
function Content() {
    const [people,changePeople] = useState(members.filter((member,index)=>{return member.role == "teacher"}));
    const [msg,changeMsg] = useState(false);

  return (
      <>
      <Header/>
            <div className="body">
                <div className="image3">
                <div className="Floating-caption">
                <p className="float_head"> INTERNSHIP CELL </p>
                <p className="float_txt">CENTRAL UNIVERSITY OF HARYANA</p>
                </div>
                </div>
                <div className="con_table">
                    <div className="con_tab" onClick={()=>{changeMsg(false); changePeople(members.filter((member,index)=>{return member.role == "teacher"}))}}> <span style={{fontSize:"1.5rem"}}><b>Teachers</b></span></div>
                    <div className="con_tab" onClick={()=>{changeMsg(false);changePeople(members.filter((member,index)=>{return member.role == "co-ordinator"}))}} > <span style={{fontSize:"1.5rem"}}><b>Co-ordinator</b></span></div>
                    <div className="con_tab" onClick={()=>{
                        changePeople([]);
                        changeMsg(msg?false:true)
                    }} ><span style={{fontSize:"1.5rem"}}><b>Message</b></span></div>   

                </div>
                <div className="con_profile">
                    {people.map((member,index)=>{
                        return <ImgCircle img={member.img} des={member.des} key={index}/>  
                    })}
                {msg?<p className='teacher_msg'>
                    <h3 className='teacher_msg_head'>Message from Internship cell</h3>
                    The Internship Cell at Centyral University of Haryana is a 
                    student led initiative that has been doing commendable work
                        in facilitating the transition from formal education
                        to professional careers for increasing numbers of our 
                        graduates. Additionally, the cell has been active in 
                        identifying and providing new and cutting edge skills to our 
                        students so that their employability gets augmented.
                        These initiatives have made our bright students even more
                        ready and raring to take up employments aligning with their skill sets.
                            I take pride in the relationships that we have 
                        nurtured with several companies that have recruited from 
                    our campus in 2020-21 despite of the 
                    Covid-19 pandemic.</p>:null}
                </div>


            
            </div>
        <Footer/>    
      </>
  );
}

export default Content;