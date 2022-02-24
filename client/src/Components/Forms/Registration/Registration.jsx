// import { useState } from "react";
// import swal from 'sweetalert';
import './Registration.css';
// import { FaCamera } from "react-icons/fa";


function RegistrationForm(){
    return(
    <div className="registration">
        <div className="regis-form">
        <h1>CUH Internship Cell</h1>
            <form autocomplete="off">
                <div  className="inputs">
                    <div  className="input">
                        {/* <input  type="text" name="firstname" id="f_name" required="" value=""/> */}
                        <input  type="text" placeholder='First Name *' name=""   />
                            {/* <label  className="label" for="f_name">
                            <span >*</span>
                
                                </label>  */}
                               
            </div>
            <div className="input">
                {/* <input placeholder=" " type="text" name="m_name" id="m_name" value=""/> */}
                <input  type="text" placeholder='Middle Name' name="" />
                       
                    <label className="label" for="m_name">
                    </label>
                        </div>
            <div className="input">
                        {/* <input placeholder=" " type="text" name="l_name" id="l_name" required="" value=""/> */}
                        <input  type="text" placeholder='Last Name *' name="" />
                            {/* <label for="l_name">
                            <span style={{paddingLeft: '90px'}}>*</span>
                            </label> */}
                            </div>
            <div  className="input">
                    <input accept=".jpg,.jpeg,.png" placeholder=" " type="file" name="file" id="file" required=""/>
                    {/* "<FaCamera/>" */}
                    </div>
            <div className="input">
            
                {/* <input placeholder=" " type="email" name="email" id="email" required="" value=""/> */}
                <input  type="text" placeholder='Email *' name="" />
                {/* <label for="email">
                <span style={{paddingLeft: '50px'}}>*</span>
                </label> */}
                </div>
                <div  className="input">

                    {/* <input placeholder=" " type="phone" name="mobile" id="mobile" required="" value=""/> */}
                    <input placeholder='Mobile No. *' type='phone'/>
                    {/* <label for="mobile">
                    <span style={{paddingLeft: '90px'}}>*</span>    
                    </label> */}
                    </div>
                    <div class="input">

                        {/* <input placeholder=" " type="text" name="linked" id="linked" value=""/> */}
                     <input placeholder='LinkedIn Profile *'/>
                        {/* <label for="linked">
                        <span style={{paddingLeft: '130px'}}>*</span></label> */}
                        </div>

                        <div  className="input">
                            {/* <input placeholder=" " type="text" name="yt" id="yt" value=""/> */}
                            <input  type="text" placeholder='Skill Set * ' name="" />
                            {/* <label for="yt">
                            <span style={{paddingLeft: '70px'}}>*</span>
                            </label> */}
                            </div>
                            <div  className="input">
                                {/* <input placeholder=" " type="text" name="fb" id="fb" value=""/> */}
                              
                                <input  type="text" placeholder='Gender *' name="" />
                                  {/* <label for="fb">
                                  <span style={{paddingLeft: '65px'}}>*</span></label> */}
                                  </div>
                                <div  className="input">

                                    {/* <input placeholder=" " type="text" name="twit" id="twit" value=""/> */}
                                    <input  type="text" placeholder='City *' name="" />
                                    {/* <label for="twit">
                                    <span style={{paddingLeft: '40px'}}>*</span>
                                    </label> */}
                                    </div><div  className="input">
                                        {/* <input placeholder=" " type="text" name="insta" id="insta" value=""/> */}
                                        <input  type="text" placeholder='Graduation Year *' name="" />
                                        
                                        {/* <label for="insta">
                                        <span style={{paddingLeft: '140px'}}>*</span></label> */}
                                        </div>

                                        <div  className="input">
                                            {/* <input placeholder=" " type="text" name="gh" id="gh" value=""/> */}
                                      <input  type="text" placeholder='Department' name="" /> 
                                        <label for="gh"></label></div>
                                        <div className="input"><div class="validate">
                                            <ul>
                                                <li>❌ must be at least 6 characters</li>
                                                <li>❌ must contain a capital letter</li>
                                                <li>❌ must contain a number</li>
                                                <li>❌must contain one of $&amp;+,:;=?@#</li>
                                                </ul>
                                                </div>
{/* 
                                                <input placeholder=" " type="password" name="pass1" id="pass1" required="" value=""/>
                                                */}
                                                <input  type="password" placeholder='Password *' name="" />
                                                 {/* <label for="pass1">
                                                 <span style={{paddingLeft: '85px'}}>*</span>
                                                     </label> */}
                                                </div>

                                <div  className="input">
                                    <div  className="validate">
                                        <span>Password didn't match ❌</span>
                                        </div>
                        {/* <input placeholder=" " type="password" name="pass2" id="pass2" required="" value=""/> */}
                        <input  type="password" placeholder='Re-type Password *' name="" />
                        {/* <label for="pass2" id="retype">
                        <span style={{paddingLeft: '150px'}}>*</span>
                        </label> */}
                        <i  className="fas pass2 fa-eye"></i></div></div>
                        <div  className="submit">
                            <input type="submit" value="Submit"/>
                            <p>(<span>*</span>) are required fields</p> 
                                                </div> 
                                                </form>
    </div>
    </div>
    );
}

export default RegistrationForm;