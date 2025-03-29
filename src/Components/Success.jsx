import React from 'react';
import '../Styles/Success.css';
import img4 from '../assets/Images/blog17.jpg';

const Success = () => {
  return (
    <div>
        <div className='success'>
            SUCCESS STORY
        </div>

        <div className='successStory1'>
            <div className='story1'>
                <img src={img4} alt="" />
            </div>

            <div className='story2'>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minima blanditiis recusandae soluta fugiat asperiores mollitia ex incidunt sit eveniet, dicta optio dolores debitis quo ullam quae tempore earum aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci deleniti id expedita quaerat quibusdam, temporibus minus sunt ad perspiciatis sint quis corporis rerum ipsam, ut, hic impedit voluptas non.
                
               </p>

               <h3>
                    SHAWN - <span>CLOUD ENGINEER</span>
                </h3>
            </div>

        </div>


        <div className='successStory1'>
            <div className='story1'>
                <img src={img4} alt="" />
            </div>

            <div className='story2'>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minima blanditiis recusandae soluta fugiat asperiores mollitia ex incidunt sit eveniet, dicta optio dolores debitis quo ullam quae tempore earum aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis adipisci deleniti id expedita quaerat quibusdam, temporibus minus sunt ad perspiciatis sint quis corporis rerum ipsam, ut, hic impedit voluptas non.
                
               </p>

                <h3>
                    NATASHA - <span>DEVELOPER</span>
                </h3>
            </div>

        </div>
    </div>
  )
}

export default Success