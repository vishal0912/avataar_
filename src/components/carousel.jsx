import React, { useState, useEffect } from 'react';

import image1 from '../images/Italian.jpg';
import image2 from '../images/chinese.jpg';
import image3 from '../images/dessert.jpg';
import image4 from '../images/snack.jpg';
import image5 from '../images/drink.jpg';
import dot from '../images/dot.png';
import bar from '../images/bar.png';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';



import '../carousel.css';


const ImageCarousel = () => {
  const images = [
    {
      src: image1,
      alt: 'Image 1',
      description: 'Description 1',
    },
    {
      src: image2,
      alt: 'Image 2',
      description: 'Description 2',
    },
    {
      src: image3,
      alt: 'Image 3',
      description: 'Description 3',
    },
    {
      src: image4,
      alt: 'Image 4',
      description: 'Description 4',
    },
    {
      src: image5,
      alt: 'Image 5',
      description: 'Description 5',
    },
  ];
  
  const [carouselState, setCarouselState] = useState(3);

  const hideDesc = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsHidden(false);
    }, 1000);
  }

  const [isHidden, setIsHidden] = useState(false);

  const imageFunc = (state) => {
    setCarouselState(state);
    hideDesc();
  }

  const goLeft = () => {
    setCarouselState((prev) => (prev === 1 ? 5 : prev - 1));
    hideDesc();
  };

  const goRight = () => {
    setCarouselState((prev) => (prev % 5) + 1);
    hideDesc();
  };

  useEffect(() => {
    const intervalId = setInterval(goRight, 2000);
    return () => clearInterval(intervalId);
  }); 

  return (
    <div className='container'>
        <div>
            <h1 className='h1'>Featured Dishes</h1>
            <h3 className='h3'>Explore and Discover a variety of Dishes!</h3>
        </div>
      <div className={`carousel state-${carouselState}`}>
        <img src={images[0].src} alt={images[0].alt} onClick={() => imageFunc(4)} />
        <img src={images[1].src} alt={images[1].alt} onClick={() => imageFunc(5)} />
        <img src={images[2].src} alt={images[3].alt} onClick={() => imageFunc(1)} />
        <img src={images[3].src} alt={images[4].alt} onClick={() => imageFunc(2)} />
        <img src={images[4].src} alt={images[4].alt} onClick={() => imageFunc(3)} />
        
      </div>
      <div className='nav-down'>
        <img className='arrow' src={leftArrow} alt='Left' onClick={goLeft}></img>
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            src={index === carouselState-1 ? bar : dot}
            alt='State'
            onClick={() => imageFunc(index+1)}
            className={index === carouselState - 1 ? 'bar-image' : 'dot-image'}
            />
        ))}
        <img className='arrow' src={rightArrow} alt='Right' onClick={goRight}></img>
      </div>
      <div className='rights'>All Rights Reserved to Vishal Pushpad.</div>
    </div>
  );
};

export default ImageCarousel;