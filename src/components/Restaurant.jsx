import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { tesla, udon } from '../assets'

const Restaurant = ({ openModal }) => {

    const bgColor = 'linear-gradient(-45deg, #a3462e, white)';

    const grContent = {
        title: 'Gericht Restaurant',
        link: 'https://github.com/ApekshaJadhav17',
        desc: 'Gericht is a meticulously crafted web presence designed to captivate visitors and leave them hungry for more. This enticing landing page serves as a digital gateway to your restaurant, providing a tantalizing preview of what patrons can expect when they dine with you. It seamlessly blends aesthetics with functionality to pique interest and drive reservations.',
        bgColor: bgColor,
        features: { 1: 'Visually Stunning Imagery', 2: 'Chefs Specials' },
    }

    return (

        <div className='xs:w-[400px] w-[250px]  cursor-pointer' >
            <motion.div
                variants={fadeIn("right", "spring", 0.75)}
                className='w-full bg-tertiary p-[1px] rounded-[20px] shadow-card'>


                <img src={udon} className='absolute z-10 lg:w-[27%] md:w-[40%] w-[55%] lg:bottom-[48%] md:bottom-[45%]  bottom-[50%] hidden md:block' />

                <div className='card-container card-gr bg-[#a3462e] rounded-[20px]  min-h-[280px] flex justify-center items-center flex-col' onClick={() => { openModal(grContent) }} >
                    <h1 className='text-[#EDEEEF] md:text-[50px] text-[40px] font-bold text-center'>
                        Gericht Resto
                    </h1>
                    <h3 className='text-[#080D1E] text-[16px] font-semibold text-center'>Premium Restaurant Landing Page</h3>
                    <div className='diagonal-fill '>
                        <h2 className='project-details text-[#080D1E] text-[19px] font-semibold text-center'>"Unleash Delight in Every Bite"</h2>
                        <p className=' text-[#080D1E] text-[14px]  text-center'>Click to dive deeper</p>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default Restaurant