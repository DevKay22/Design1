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
            
           <p>Hello</p>

        </div>
           
            
            
        
    </div>
  )
}

export default Contacts