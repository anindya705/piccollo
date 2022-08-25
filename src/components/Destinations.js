import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'
import image4 from '../assets/image-4.jpg'


const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>hold on, how?</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>first.</h3>
          <p>
            upload up to 3 videos of your game footage into our system. 
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>second.</h3>
          <p>
            fill out our trademarke LevelUp™ form so we can help you improve with the way you want to.
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>third.</h3>
          <p>
            check your email for personalized feedback from one of our trusted coaches and among the best athletes in the world. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
