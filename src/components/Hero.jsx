import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { Canvas } from '@react-three/fiber';
import About from './About';
import { ContactButton } from '../constants';
import { download, download1, hire1, hire2, intro2, introV, play, resume } from '../assets';
import Contact from './Contact';

const Hero = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);





  const buttonStyle = {
    backgroundColor: isHovered ? 'white' : 'rgba(217, 108, 61, 0.85)',
    color: isHovered ? 'black' : 'white',
    transition: 'background-color 0.5s, color 0.5s',

  };

  const ContactbuttonStyle = {
    backgroundColor: isContactHovered ? 'white' : 'rgba(217, 108, 61, 0.85)',
    color: isContactHovered ? 'black' : 'white',
    transition: 'background-color 0.5s, color 0.5s',

  };






  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const handleContactMouseEnter = () => {
    setIsContactHovered(true);
  };

  const handleContactMouseLeave = () => {
    setIsContactHovered(false);
  };



  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        setIsPaused(true);
        video.play();

      }

      else if (video.ended) {
        setIsPaused(true);
        video.play();
      }
      else {
        video.pause();
        setIsPaused(false);
      }
    }
  };



  const handleVideoEnded = () => {
    const video = videoRef.current;
    video.pause();
    setIsPaused(false);
  }







  return (
    <>
      <section className=' w-full h-screen mx-auto '>

        <div className={`${styles.paddingX}   mx-auto  flex   flex-col    lg:flex-row   items-center  w-full   lg:gap-40   `} >

          {/* left side  */}
          <div className='flex flex-row gap-5  lg:mt-40 md:mt-32 mt-20 '>



            {/* for pin gradient  */}
            {/* <div className=' flex flex-col lg:justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#9153ff]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div> */}

            {/* heading  */}
            <div className=''>
              <h1 className={`${styles.heroHeadText} text-white`}>Weaving <span className='text-[#d96c3d]'>stories</span> with <br></br> <span className='text-[#d96c3d]'>Digital <span className='text-white'>Experiences</span></span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>Welcome to the Techie side of <span className='text-[#d96c3d]'>Apeksha J</span></p>


              <button className='md:text-[18px] text-[14px] md:mt-10 mt-5 sm:p-2 p-1 rounded font-medium cursor-pointer ' style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <a href='#' download={resume} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  Resume <img src={isHovered ? download1 : download} className='w-[12%] ml-2' alt='Download Icon' />
                </a>
              </button>


              {ContactButton.map((button) => (

                <button className={`md:text-[18px] text-[14px] md:mt-10 mt-5 sm:p-[8px] p-1 pl-0 pr-0  rounded font-medium cursor-pointerr ml-5`} key={button.id} style={ContactbuttonStyle}
                  onMouseEnter={handleContactMouseEnter}
                  onMouseLeave={handleContactMouseLeave} onClick={() => setActive(button.title)}>
                  <a href={`#${button.id}`} className='flex items-center justify-center'>
                    Hire Me
                    <img src={isContactHovered ? hire2 : hire1} className='w-[16%] ml-2' alt='Download Icon' /></a></button>
              ))}

            </div>
          </div>


          {/*right side 
           video  */}
          <div className="flex flex-col items-center  lg:mt-40 md:mt-18 mt-10 lg:w-80  md:w-[50%] w-[50%] ">
            <video ref={videoRef} src={introV} className="rounded-full overflow-hidden" onClick={toggleVideo} onEnded={handleVideoEnded} />
            {isPaused ? <p className='text-18 text-secondary  mt-5 cursor-pointer' onClick={toggleVideo}> Pause! </p> : <p className='text-18 text-secondary  mt-5 cursor-pointer' onClick={toggleVideo}> Play Me!</p>}
          </div>


        </div>

        {/* scroll button  */}
        <div className=' lg:mt-[5%] mt-[8%] w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#a696d4] flex justify-center items-start p-2 ' style={{ cursor: 'pointer' }}>
              <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className='w-3 h-3 rounded-full bg-[#a696d4]'></motion.div>
            </div>
          </a>
        </div>



      </section>


    </>
  );
}

export default Hero;
