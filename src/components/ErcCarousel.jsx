import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { Honeybees, amaya, chanak, erc, erc2 } from '../assets';

const ErcCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Define an array of JSX elements representing slide content
  const slideContent = [
    (
      <div className="md:w-[22vw] md:h-[25vh] w-[80vw] h-[40vh]">
        <img src={erc} />
      </div>
    ),
    (
      <div className="md:w-[22vw] md:h-[25vh]  w-[80vw] h-[40vh]">
        <img src={erc2} />
      </div>
    ),
    
  ];

  const slideVariants = {
    enter: { x: '5%' },
    center: { x: '0%' },
    exit: { x: '-100%' },
  };

  return (
    <div className="sm:absolute lg:top-[33%] md:right-[12.5%] md:top-[26%] ">
      <motion.div
        className="slide"
        initial="enter"
        animate="center"
        exit="exit"
        variants={slideVariants}
        transition={{ duration: 0.5 }}
        key={currentSlide} // Key ensures that the component re-renders when the current slide changes
      >
        {slideContent[currentSlide]}
      </motion.div>
    </div>
  );
};

export default ErcCarousel;
