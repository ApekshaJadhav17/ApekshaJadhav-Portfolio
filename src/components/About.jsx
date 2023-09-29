import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { introduction } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import IntroCard from './IntroCard';
import { useState } from 'react';
import IntroRobot from './IntroRobot';
import {  linkedin, github, insta } from '../assets';

const About = () => {

  


  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleCardClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
      <div className='flex lg:flex-row lg:gap-[10vw] lg:mt-10 lg:h-screen  md:mt-20        flex-col '>
        <div className=' flex flex-col'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>



            {/* answer text  */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-[secondary] md:text-[17px] text-[14px] max-w-3xl md:h-30 h-30 leading-[30px]'>
            {selectedAnswer ? (
              <motion.span
                key={selectedAnswer} // Add a unique key for each answer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {selectedAnswer}
              </motion.span>
            ) : (
              'Click the below cards to know more...!'
            )}
          </motion.p>
            

            {/* card  */}
          <div className='mt-20 flex flex-wrap md:gap-10 justify-evenly       gap-4'>
            {introduction.map((intro, index) => (
              <IntroCard
                key={intro.title}
                index={index}
                {...intro}
                onClick={() => handleCardClick(intro.answer)}
              />
            ))}
          </div>


         


        </div>

        <div className='lg:w-[26vw] lg:h-[110vh] w-[90vw] h-[90vh]  '>
          <IntroRobot />
        </div>


        


      </div>



      <div className=' flex flex-col items-center  justify-center w-[100%] '>
            <h1 className='sm:text-[22px] text-[14px] text-secondary text-center  tracking-wider' >Life, Work, And Everything in Between </h1>

            <div className='flex flex-row items-center justify-center gap-5 mt-4 h-16'>


              <a href='https://www.linkedin.com/in/apeksha-jadhav' target='_'>
                <img src={linkedin} className='w-12 hover:w-14'></img>
              </a>

              <a href='https://github.com/ApekshaJadhav17' target='_'>
                <img src={github} className='w-12 hover:w-14'></img>
              </a>

              <a href='' target='_'>
                <img src={insta} className='w-12 hover:w-14'></img>
              </a>



            </div>
          </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
