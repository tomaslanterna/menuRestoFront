import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages=[
  {
    url:'http://www.concortv.gob.pe/images/informacion/noticias/2012/05-comida-chatarra2.jpg',
    caption:'Slide 1'
  },
  {
    url:'https://www.fratellos.co.uk/myimages/349/fratellos_menu_woodfiredpizza2.jpg',
    caption:'Slide 2'
  },
  {
    url:'https://www.elmundo.es/larevista/num74/imagenes/com3b1.jpg',
    caption:'Slide 3'
  }
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const BannerResto = () => {
  return (
    
    <div className='slide-container'>
      <Slide {...properties} className='slide'>
        {
          slideImages.map((slideImage,index)=>{
            return (
            <div key={index} className='slideStyle'> 
              <img src={slideImage.url} alt={slideImage.caption} />
            </div>
            )
          })
        }
      </Slide>
    </div>
  )
}

export default BannerResto