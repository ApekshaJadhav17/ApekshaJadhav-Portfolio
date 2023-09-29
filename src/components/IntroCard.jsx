import { Tilt } from 'react-tilt'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const IntroCard = ({ index, title, icon, onClick }) => (
    <div onClick={onClick}>
        <Tilt className='sm:w-[250px] w-[150px]   cursor-pointer'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary rounded-[20px] sm:py-5 sm:px-2 py-2 px-1  sm:min-h-[280px] min-h-[120px] flex justify-evenly items-center flex-col'
                >
                    <img
                        src={icon}
                        alt='web-development'
                        className='md:w-16 md:h-16 w-8 h-8 object-contain'
                    />

                    <h3 className='text-white md:text-[20px] text-[14px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    </div>
);

export default IntroCard