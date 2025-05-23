import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'


const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <motion.section variants={staggerContainer()} initial='hidden' whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.padding}  mx-auto relative z-0`}>

                {/* <span className='hash-span' id={idName}> &nbsp; </span> */}
                <Component />
            </motion.section>
        )
    }

    return HOC
}

export default SectionWrapper