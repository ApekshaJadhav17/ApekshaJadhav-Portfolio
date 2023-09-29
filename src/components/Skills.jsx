import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from "../style";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (


    <>
      <div className='flex  flex-col gap-10 mt-16 sm:mt-0 '>
        <div className=' flex flex-col'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Skills </p>
            <h2 className={styles.sectionHeadText}>Technologies</h2>
          </motion.div>

        </div>


        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>

        <div>
          <h2 className='text-secondary text-1xl text-center'>Manipulate the Spheres </h2>
          <p className='text-secondary text-[14px] text-center'>Drag to Play!</p>
        </div>


      </div>

    </>
  );
};

export default SectionWrapper(Skills, "skills");