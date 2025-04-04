import React from 'react'
import '../Styles/Testimonials.css';
import avatar2 from '../assets/Images/avatar2.jpg';
import avatar12 from '../assets/Images/avatar12.jpg';
const Testimonials = () => {
  return (
    <div >
      <h1 className='testiTag'>
        OUR TESTIMONIALS
      </h1>

      <div className='testimonial'>
          <div className='img'>
            <img src={avatar2} alt="" />
          </div>
          <div className='content'>
            <h1>
              PETER JOE
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea nesciunt, mollitia architecto quas eveniet harum praesentium ipsa quia? Corporis, mollitia? Facilis, minima necessitatibus. Quos ullam minima natus nulla molestiae?
            </p>
            <p>
              READ MORE
            </p>
          </div>
      </div>

      <div className='testimonial'>

      <div className='content'>
            <h1>
               ALICIA EMMIES
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea nesciunt, mollitia architecto quas eveniet harum praesentium ipsa quia? Corporis, mollitia? Facilis, minima necessitatibus. Quos ullam minima natus nulla molestiae?
            </p>
            <p>
              READ MORE
            </p>
          </div>
          <div className='img'>
            <img src={avatar12} alt="" />
          </div>
          
      </div>
    </div>
  )
}

export default Testimonials