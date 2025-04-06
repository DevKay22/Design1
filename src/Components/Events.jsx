import React from 'react'
import '../Styles/Events.css';
import person1 from '../assets/Images/person1.jpeg';
import person2 from '../assets/Images/blog16.jpg'
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import avatara from '../assets/Images/avatar4.jpg';
import avatarb from '../assets/Images/avatar9.jpg';
import avatarc from '../assets/Images/avatar15.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";

const Events = () => {
  return (
    <div >
      <div className='upcoming'>
      <h1>
            UPCOMING EVENTS
        </h1>
      </div>
       

        <div className='theEvents'>
          {/* event1 */}
          <div  className='event1'>
              <div className='person1'>
                <img src={person1} alt=""  />
              </div>

              <h1>

                INTERNATIONAL MEET IN 2024
              </h1>

              <div className='iconCont'>
                <div>
                <p><span className='iccon'><FaCalendarAlt /></span> 26th March, 2024 </p>
                </div>
                <div>
                    <p>
                      <span className='iccon'><IoPerson /></span> John
                    </p>
                </div>
                
                  
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam maiores. Quisquam amet, ex eaque, quidem consequuntur incidunt assumenda unde reprehenderit similique quaerat animi, pariatur eius? Voluptates voluptate dolor illum.
              </p>

              <div>
                <button>
                  Learn More
                </button>
              </div>
          </div>

            {/* event2 */}
            <div  className='event1'>
              <div className='person1'>
                <img src={person2} alt=""  />
              </div>

              <h1>

                PUBLIC WELFARE MEET IN 2024
              </h1>

              <div className='iconCont'>
                <div>
                <p><span className='iccon'><FaCalendarAlt /></span> 26th March, 2024 </p>
                </div>
                <div>
                    <p>
                      <span className='iccon'><IoPerson /></span> John
                    </p>
                </div>
                
                  
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam maiores. Quisquam amet, ex eaque, quidem consequuntur incidunt assumenda unde reprehenderit similique quaerat animi, pariatur eius? Voluptates voluptate dolor illum.
              </p>

              <div>
                <button>
                  Learn More
                </button>
              </div>
          </div>

        </div>

<div>
<div className='partner'>
         <div className='partneroverlay'></div>
          <div className='partnercontent'>
              < h1 className='part'>
                PARTNER WITH US
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Eveniet, eaque. Dolores fuga debitis, autem ipsam, quibusdam accusamus. Sed reprehenderit iure laborum a ipsa?
              </p>

              <button>Read More</button>
          </div>
</div>
        <div className='partner-overlay'>
        
        </div>
        

</div>

<div className='employees'>
  <div className='emplA'>
    <div className='up'>
      <div className='avatara'>
        <img src={avatara} alt="" />
      </div>
      <div>
        <h1>JOVINTA</h1>
        <p>DEVELOPER</p>
        <span className='socialIcons'>
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagramSquare />
        </span>
        
      </div>
      {/* <div className='devIcons'>
        
      </div> */}
    </div>
    <div className='contacts'>
    <p>
    <MdOutlineContactPhone  className='conticons'/> +01 23678 9778
    </p>
    <p>
    <CgMail className='conticons' /> xyz@gmail.com
    </p>
    </div> 
   
  </div>

    <div className='emplA'>
    <div className='up'>
      <div className='avatara'>
        <img src={avatarb} alt="" />
      </div>
      <div>
        <h1>MARY</h1>
        <p>DEVELOPER</p>
        <span className='socialIcons'>
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagramSquare />
        </span>
        
      </div>
      {/* <div className='devIcons'>
        
      </div> */}
    </div>
    <div className='contacts'>
    <p>
    <MdOutlineContactPhone  className='conticons'/> +01 23678 9778
    </p>
    <p>
    <CgMail className='conticons' /> xyz@gmail.com
    </p>
    </div> 
   
    </div>
    
    <div className='emplA'>
    <div className='up'>
      <div className='avatara'>
        <img src={avatarc} alt="" />
      </div>
      <div>
        <h1>COLLINS</h1>
        <p>DEVELOPER</p>
        <span className='socialIcons'>
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagramSquare />
        </span>
        
      </div>
      {/* <div className='devIcons'>
        
      </div> */}
    </div>
    <div className='contacts'>
    <p>
    <MdOutlineContactPhone  className='conticons'/> +01 23678 9778
    </p>
    <p>
    <CgMail className='conticons' /> xyz@gmail.com
    </p>
    </div> 
   
    </div>
</div>


</div>
  )
}

export default Events