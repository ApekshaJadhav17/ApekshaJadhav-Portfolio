import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { d1, d2, d3, d4 } from '../assets';


const WorkCarousel = (props) => {

    const slideVariants = {
        hidden: { opacity: 0 }, // Slide starts as hidden
        visible: { opacity: 1 }, // Slide becomes visible
    };


    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        );
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const slideContent = [
        (

            <div className=" ">
                <img src={d1} />

            </div>
        ),
        (
            <div className=" ">
                <img src={d2} />

            </div>
        ),
        (
            <div className=" ">
                <img src={d3} />

            </div>
        ),
    ];





    const slideContent2 = [
        (

            <div className=" ">
                <img src={d4} />
            </div>
        ),
        (

            <div className=" ">
                <img src={d4} />
            </div>
        ),
        (

            <div className=" ">
                <img src={d4} />
            </div>
        ),
       
    ];

    return (

        <div >
            <div>
                <motion.div
                    className="slide"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideVariants}
                    transition={{ duration: 5.5 }}
                    key={currentSlide}
                >
                 {props.erc ? slideContent2[currentSlide] : slideContent[currentSlide] }  
                </motion.div>
            </div>

        </div>


    );
};

export default WorkCarousel;    
