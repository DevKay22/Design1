import React from 'react'

const Test = () => {
  return (
    <div>
        <div className='contactForm'>
            <div className='nice'>
            <div>
                <h1 className='join'>JOIN US TO RAISE THE HOPE!</h1>

                </div>

            <div className='form'>
                <div >
                    <div>
                        <input type="text" placeholder='First Name' name='firstname' id='firstname' />
                    </div>
                    <div>
                        <input type="text" placeholder='Last Name' name='
                        lastname' id='lastname' />
                    </div>
                </div>

                <div >
                    <div>
                        
                        <input type='number' placeholder='Phone Number' name='phonenumber' id='phonenumber' />
                    </div>
                    <div>
                        <input type="email" placeholder='Enter Your Email' name='
                        email' id='email' />
                    </div>
                </div>
                 <div>
                    <textarea name="message" id="message" placeholder='Enter Comment'></textarea>
                </div> 

                <div>
                    <button type='button'>
                        SUBMIT
                    </button>
                </div>

                
            </div>
            

            </div>
           
            
            
        </div>
    </div>
  )
}

export default Test