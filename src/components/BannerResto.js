import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages=[
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02o2yzLdO-fmT1mCvQTjMEjvUueXDSdGLvaDCveyJdw_4Rb6qQFZJ2pCZBJk2hkmnUuo&usqp=CAU',
    caption:'Slide 1'
  },
  {
    url:'https://m.media-amazon.com/images/I/41Yt82nCzIL.jpg',
    caption:'Slide 2'
  },
  {
    url:'https://m.media-amazon.com/images/I/41-hKdtBczL._AC_SY580_.jpg',
    caption:'Slide 3'
  }
]

const BannerResto = () => {
  return (
    
    <div className='slide-container m-2 banner-restoProfile'>
      <Slide>
        {
          slideImages.map((slideImage,index)=>{
            <div className='each-slide' key={index}>
              <div style={{'backgroundImage':`url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          })
        }
      </Slide>
    </div>
  )
}

export default BannerResto