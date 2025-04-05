import React from 'react';
import '../Styles/Contacts.css';
import { SlLocationPin } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className='contacts'>
        <div className='contact'>
            <h1>
                CONTACT US
            </h1>

            <div className='contItems'>
                <div>
                    <div className='contLogo'><SlLocationPin /></div>
                    <div className='contDetails'>
                        <p>RC Jameson Avenue,</p>
                        <p>Baltimore County</p>
                        <div>
                        <p>Maryland - 78454748</p>
                        </div>
                        
                    </div>
                </div>
                <div>
                <div className='contLogo'><IoCall /></div>
                    <div className='contDetails special'>
                        <p>+1-243737393933</p>
                        <p>+965-378962774</p>
                        
                        
                    </div>
                </div>
                <div>
                <div className='contLogo'><FaRegEnvelope /></div>
                    <div className='contDetails  special'>
                        <p>abc@ymail.com</p>
                        <p>xyz@email.com</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className='contactForm'>
            <div className='nice'>
            <div>
                <h1 className='join'>JOIN US TO RAISE THE HOPE!</h1>

                </div>

            <div className='form'>
                <div >
                    <div>
                        <input type="text" placeholder='First Name' name='firstname' id='firstname' />
                    </div>
                    <div>
                        <input type="text" placeholder='Last Name' name='
                        lastname' id='lastname' />
                    </div>
                </div>

                <div >
                    <div>
                        
                        <input type='number' placeholder='Phone Number' name='phonenumber' id='phonenumber' />
                    </div>
                    <div>
                        <input type="email" placeholder='Enter Your Email' name='
                        email' id='email' />
                    </div>
                </div>
                 <div>
                    <textarea name="message" id="message" placeholder='Enter Comment'></textarea>
                </div> 

                

                
            </div>
            

            </div>
           

                <div className='whiner'>
                    <button type='button'>
                        SUBMIT
                    </button>
                </div> 
            
        </div>
           
               
            
        
    </div>
  )
}

export default Contacts