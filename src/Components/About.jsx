import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div >
        <div className='about'>
            ABOUT US
        </div>

        <div className='abtItems'>
            <div className='abtItem1'>
                <h1>
                    Association for Society
                </h1>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit laudantium sequi
                     repellat, error quis assumenda aliquid, 
                     nventore 
                </p>

                <div className='abtItemsList'>
                    <div>
                        <ul>
                            <li>Mending lives</li>
                            <li>Helping people</li>
                            <li>Healing hurts</li>
                            <li>Restoring peace</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>lorem ipsim</li>
                            <li>sit met</li>
                            <li>doloe hela</li>
                            <li>ipsum dolor</li>
                        </ul>
                    </div>
                </div>

                <div classname='abtListMore'>
                    <button>Read More</button>
                </div>
            </div>
            <div>hi</div>
        </div>
    </div>
  )
}

export default About

