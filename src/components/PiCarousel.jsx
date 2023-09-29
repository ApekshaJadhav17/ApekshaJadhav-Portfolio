import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Honeybees, amaya, chanak } from '../assets';

const PiCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

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
      <div className="lg:w-[22vw] lg:h-[25vh] md:w-[25vw] md:h-[28vh] w-[80vw] h-[40vh]">
        <img src={chanak} />
      </div>
    ),
    (
      <div className="lg:w-[22vw] lg:h-[25vh] md:w-[25vw] md:h-[28vh] w-[80vw] h-[40vh]">
        <img src={amaya} />
      </div>
    ),
    (
      <div className="lg:w-[22vw] lg:h-[25vh] md:w-[25vw] md:h-[28vh] w-[80vw] h-[40vh]">
        <img src={Honeybees} />
      </div>
    ),
  ];

  const slideVariants = {
    enter: { x: '5%' },
    center: { x: '0%' },
    exit: { x: '-100%' },
  };

  return (
    <div className="sm:absolute lg:top-[33%] lg:right-[12.5%] md:right-[11%] md:top-[26%]  ">
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

export default PiCarousel;
