import React from 'react';
import '../Styles/About.css';
import people from '../assets/Images/blog21.jpg';
import person from '../assets/Images/blog17.jpg';

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

                <div id='btc'>
                    <button>Read More</button>
                    
                </div>
            </div>
            <div className='abtItems1b'>
                <img src={people} alt="" />
            </div>
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

                <div id='btc'>
                    <button>Read More</button>
                    
                </div>
            </div>
            <div className='abtItems1b'>
                <img src={person} alt="" />
            </div>
        </div>

    </div>
  )
}

export default About

