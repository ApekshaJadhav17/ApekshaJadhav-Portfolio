import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import WorkCarousel from './WorkCarousel';
import { d1, d2, d3, linkto, sdsu1 } from '../assets';
import { fadeIn } from '../utils/motion';

const Works = () => {
  const erc = true;

  const externalLinks = {
    vShips: 'https://www.vcrew.com/',
    chanak: 'https://www.chanakya.school/index.php'
  };

  const slideVariants = {
    hidden: { opacity: 0 }, // Slide starts as hidden
    visible: { opacity: 1 }, // Slide becomes visible
  };

  return (
    <>
      <div className='flex flex-col gap-10'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Intern & SDE</p>
          <h2 className={styles.sectionHeadText}> Work Experience. </h2>
        </motion.div>
      </div>

      {/* Teaching Assistant - San Diego State University */}
      <div className='flex flex-col gap-10 mt-24 sm:mt-0'>
        <motion.div variants={textVariant()} id='Workcarousel'>
          <div className="flex flex-col md:flex-row w-full h-auto md:h-[30vh] lg:h-[55vh]">
            <div className="flex flex-col w-full md:w-1/2 mx-auto mt-10">
              <p className='text-secondary text-[14px]'>Teaching Assistant</p>
              <h2 className={styles.carouselHeadText}>San Diego State University</h2>
              <div className='flex flex-col justify-center items-start gap-2 mt-5'>
                <p className='text-secondary text-[14px] sm:text-[16px]'>
                  Contribution: Mentored 64+ students in understanding core data structures & algorithm design concepts in C++ and Python. Led interactive code-optimization sessions, fostering analytical, problem-solving and debugging skills by 50%. Utilized PyCharm, Git, GitHub & Python scripting to automate tasks & test case evaluations by 60%.
                </p>
                <p className='text-secondary xs:text-[14px] text-[16px]'>Tech Stack Used: C++, Python, Git, Github</p>
              </div>
            </div>

            <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className='w-full md:w-1/2 p-5'>
              <img src={sdsu1} className='rounded w-full' />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Software Developer - Pi Techniques */}
      <div className='flex flex-col gap-10 mt-24 sm:mt-0'>
        <motion.div variants={textVariant()} id='Workcarousel'>
          <div className="flex flex-col md:flex-row w-full h-auto md:h-[30vh] lg:h-[55vh]">
            <div className="flex flex-col w-full mx-auto mt-10">
              <p className='text-secondary text-[14px]'>Software Developer</p>
              <h2 className={styles.carouselHeadText}>Pi Techniques</h2>
              <div className='flex flex-col justify-center items-start gap-2 mt-5'>
                <p className='text-secondary text-[14px] sm:text-[16px]'>
                  Contributed to two main projects: <a href={externalLinks.vShips} target='_blank' className='hover:text-[#d96c3d] underline'>V-Ships</a> and <a href={externalLinks.chanak} target='_blank' className='hover:text-[#d96c3d] underline'>Chanakya School of Craft</a>.
                </p>
                <p className='text-secondary text-[14px] sm:text-[16px]'>
                  Other projects: <span className='hover:text-[#d96c3d] cursor-pointer underline'>Amaya Homes</span>, <span className='hover:text-[#d96c3d] cursor-pointer underline'>Chetana-Foundation</span>, <span className='hover:text-[#d96c3d] cursor-pointer underline'>Honeybees School</span>.
                  <a href='#' target='_blank'><img src={linkto} className='w-[20px] inline' /></a>
                </p>
                <p className='text-secondary xs:text-[14px] text-[16px]'>Tech Stack Used: HTML, CSS, Tailwind, JavaScript, TypeScript, React, Node, Docker</p>
              </div>
            </div>

            <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className='w-full'>
              <WorkCarousel />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Web Developer Intern - Eastern Royal */}
      <div className='flex flex-col gap-10 mt-24 sm:mt-0'>
        <motion.div variants={textVariant()} id='Workcarousel'>
          <div className="flex flex-col md:flex-row w-full h-auto md:h-[30vh] lg:h-[55vh]">
            <div className="flex flex-col w-full mx-auto mt-10">
              <p className='text-secondary text-[14px]'>Web Developer Intern</p>
              <h2 className={styles.carouselHeadText}>Eastern Royal</h2>
              <div className='flex flex-col justify-center items-start gap-2 mt-5'>
                <p className='text-secondary text-[14px] sm:text-[16px]'>
                  Contributed to building World's First Smart Campus Tour: <a href='https://mitisbj.edu.in/' target='_blank' className='hover:text-[#d96c3d] underline'>MIT-ADT ISBJ</a>
                </p>
                <p className='text-secondary xs:text-[14px] text-[16px]'>Other Contributions: Product Management, Social Media Marketing, Data Analysis</p>
                <p className='text-secondary xs:text-[14px] text-[16px]'>Tech Stack Used: HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, Figma</p>
              </div>
            </div>

            <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className='w-full'>
              <WorkCarousel erc={erc} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
