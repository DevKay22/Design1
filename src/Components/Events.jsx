import React from 'react'
import '../Styles/Events.css';
import person1 from '../assets/Images/person1.jpeg';
import person2 from '../assets/Images/blog16.jpg'
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

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


        <div className='partner'>
            <div>
              <h1>
                PARTNERSHIPS
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Eveniet, eaque. Dolores temporibus amet laborum assumenda officia, libero similique fuga debitis, autem ipsam, quibusdam accusamus. Sed reprehenderit iure laborum a ipsa?
              </p>

              <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Events