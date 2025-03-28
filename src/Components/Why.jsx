import React from 'react';
import '../Styles/Why.css';
import love from '../assets/Images/blog95.jpg'

const Why = () => {
  return (
    <div>
        <div className='whyCont'>
            <div className='imag'>
                <img src={love} alt="" />
            </div>

            <div className='whyReal'>
                <h1>WHY WE ARE</h1>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid vitae illo fugiat doloremque sit nemo aspernatur saepe odit dignissimos maiores, quaerat minus eius assumenda provident nesciunt,
                     quisquam molestiae nam expedita!
                </p>

                <ul>
                    <li>Social Care</li>
                    <li>Healthcare</li>
                    <li>Education</li>
                    <li>Community</li>
                </ul>

                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Why