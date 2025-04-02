import React from 'react';
import '../Styles/Press.css';
import img80 from '../assets/Images/blog80.jpg';
import img82 from '../assets/Images/blog82.jpg';
import img87 from '../assets/Images/blog87.jpg';

const Press = () => {
  return (
    <div>
        <div className='pressCont'>
            <div>
                <div className='pressImg'><img src={img80} alt="" /></div>
                <div>
                    <h1> ANNUAL REPORTS</h1>
                    <p id='pressStory'>Corporis perferendis laboriosam aspernatur nihil iusto. Incidunt fuga quia ab nesciunt, at tenetur architecto perspiciatis.</p>
                    <p className='pressRead'>READ MORE</p>
                </div>
                
            </div>
            <div>
            <div className='pressImg'><img src={img82} alt="" /></div>
                <div>
                    <h1> RIOTS IN JAKARTA</h1>
                    <p id='pressStory'>Corporis perferendis laboriosam aspernatur nihil iusto. Incidunt fuga quia ab nesciunt, at tenetur architecto perspiciatis.</p>
                    <p className='pressRead'>READ MORE</p>
                </div>
            </div>
            <div>
            <div className='pressImg'><img src={img87} alt="" /></div>
                <div>
                    <h1> CSR</h1>
                    <p id='pressStory'>Corporis perferendis laboriosam aspernatur nihil iusto. Incidunt fuga quia ab nesciunt, at tenetur architecto perspiciatis.</p>
                    <p className='pressRead'>READ MORE</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Press