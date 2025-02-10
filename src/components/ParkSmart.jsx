import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { tesla } from '../assets'
import Modal from './Modal'

const ParkSmart = ({ openModal}) => {

    const bgColor = 'linear-gradient(-45deg, #3498db, white)';

    const psContent = {
        title: 'Park Smart',
        link : 'https://github.com/ApekshaJadhav17',
        desc : 'ParkSmart is a cutting-edge smart parking project that leverages technology to revolutionize the parking experience. This innovative system combines advanced Computer Vision Models, IoT based QR Code Module, advanced algorithms to find nearest vacant parking spot, real-time Navigation, and much more to optimize parking management',
        features: { 1:'Mobile and Web App for Drivers', 2:'Navigation and Directions' , 3:'Parking Reservations'},
        achievements: { 1:'Raised Funding from CRIEYA INNOVATIONS', 2:'Won Best Project Award of the Year 2023 at MIT-ADT University', 3:'Pre-Seed startup co-founded by me',},
        bgColor: bgColor
    }

   
   
    return (

        <>

        <div className='xs:w-[400px] w-[250px]  cursor-pointer'>
            <motion.div
                variants={fadeIn("right", "spring", 0.75)}
                className='w-full bg-tertiary p-[1px] rounded-[20px] shadow-card'>


                <img src={tesla} className='absolute z-10 lg:w-[25%] md:w-[40%] w-[50%]   lg:bottom-[50%] md:bottom-[70%]  bottom-[80%] hidden md:block' />

                <div className='card-container card-ps bg-[#2B82C9] rounded-[20px]  min-h-[280px] flex justify-center items-center flex-col' onClick={() => { openModal(psContent)}}>
                    <h1 className='text-[#EDEEEF] md:text-[50px] text-[40px] font-bold text-center'>
                        Park Smart
                    </h1>
                    <h3 className='text-[#080D1E] text-[16px] font-semibold text-center'>Automated Parking Management System</h3>


                    
                    <div className='diagonal-fill '>
                        <h2 className='project-details text-[#080D1E] text-[19px] font-semibold text-center'>"Shift Gears to Efficiency Mode with <br></br>Park Smart!"</h2>
                        <p className=' text-[#080D1E] text-[14px]  text-center'>Click to dive deeper</p>
                    </div>
                </div>
            </motion.div>

        </div>


        </>
    )
}

export default ParkSmart