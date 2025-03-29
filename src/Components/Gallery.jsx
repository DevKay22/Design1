import React from 'react';
import '../Styles/Gallery.css';
import img1 from '../assets/Images/blog17.jpg';
import img2 from '../assets/Images/blog2.jpg';
import img3 from '../assets/Images/blog21.jpg';
import img4 from '../assets/Images/blog90.jpg';
import img5 from '../assets/Images/blog95.jpg';
import img6 from '../assets/Images/blog97.jpg';


const Gallery = () => {
  return (
    <div>
        <div className='gallery'>
            GALLERY
        </div>

        <div>
            <div className='galleryItems'>
                <div className='galleryItem1'>
                    <div className='galleryItem1a'>
                        <div className='diva'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='divb'>
                            <img src={img2} alt="" />   
                        </div>
                    </div>
                    <div className='galleryItem1b'>
                        <div className='divc'>
                            <img src={img3} alt="" />   
                        </div>
                        <div className='divd'>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className='galleryItem1a'>
                        <div className='diva'>
                            <img src={img5} alt="" />
                        </div>
                        <div className='divb'>
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>

                {/* gallery items b */}
                

            </div>
        </div>
    </div>
  )
}

export default Gallery