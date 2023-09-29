import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { drums } from '../assets'

const Drums = ({ openModal }) => {

    const bgColor = 'linear-gradient(-45deg, #7d8b8c, white)';

    const dkContent = {
        title: 'Drum Kit',
        desc: 'The Online Drum Kit Simulator is an innovative and interactive web-based project that enables music enthusiasts and aspiring drummers to experience the joy of playing the drums from the comfort of their own computer or mobile device. This project aims to provide an immersive and user-friendly platform for users to explore the world of drumming',
        bgColor : bgColor,
        features: {1: 'Key Press Recognition', 2: 'Virtual kit with realistic Sound'},

        achievements: ''
    }


    return (
        <div className='xs:w-[400px] w-[250px]  cursor-pointer '>
            <motion.div
                variants={fadeIn("right", "spring", 0.75)}
                className='w-full bg-tertiary p-[1px] rounded-[20px] shadow-card'>


                <img src={drums} className='absolute lg:w-[29%] md:w-[40%] w-[65%] lg:bottom-[48%]  bottom-[20%] z-10 hidden md:block' />

                <div className='card-container card-dk bg-[#7d8b8c] rounded-[20px]  min-h-[280px] flex justify-center items-center flex-col' onClick={() => { openModal(dkContent) }}>
                    <h1 className='text-[#EDEEEF] md:text-[50px] text-[40px] font-bold text-center'>
                        Drums Kit
                    </h1>
                    <h3 className='text-[#080D1E] text-[16px] font-semibold text-center'>Premium Restaurant Landing Page</h3>
                    <div className='diagonal-fill '>
                        <h2 className='project-details text-[#080D1E] text-[19px] font-semibold text-center'>"Beat It Up"</h2>
                        <p className=' text-[#080D1E] text-[14px]  text-center'>Click to dive deeper</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Drums