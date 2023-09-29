import React from "react";
import { motion } from "framer-motion";
import { textVariant } from '../utils/motion';
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import ParkSmart from "./ParkSmart";
import Restaurant from "./Restaurant";
import Drums from "./Drums";
import { useState } from "react";
import Modal from "./Modal";
import { projects } from '../constants'

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');


   


    // Function to open the modal
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };
    return (
        <>
            <div className='flex  flex-col gap-10 lg:h-screen'>
                <div className=' flex flex-col mt-10'>
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>Web And Mobile Apps </p>
                        <h2 className={styles.sectionHeadText}>Projects</h2>
                    </motion.div>

                </div>

                <div className='mt-20 flex flex-wrap md:justify-space-around justify-center lg:gap-10 md:gap-28  gap-20'>
                    <ParkSmart openModal={openModal}  />

                    <Restaurant openModal={openModal} />

                    <Drums openModal={openModal}/>

                    {isModalOpen && modalContent &&  <Modal closeModal={closeModal} modalContent={modalContent} />}





                </div>



            </div>

        </>
    )
}

export default SectionWrapper(Projects, 'projects')





// basically i need to map over which component sent the modal click event.
// if 1, show ps content, 
// if 2, show gr content and so on 