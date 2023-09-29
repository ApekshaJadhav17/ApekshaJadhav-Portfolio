import React from 'react';
import { styles } from '../style';
import ParkCar from './Project3dModel';
import UdonMeal from './UdonMeal';
import Drum3d from './Drum3d';
import Project3dModel from './Project3dModel';

const Modal = ({ closeModal, modalContent }) => {

  const bgColor = modalContent.bgColor;
  
  return (
    <div className="modal-overlay rounded     lg:w-[50%]  lg:h-[50%]  md:w-[80%] md:h-[25%]  w-[80%]  absolute lg:bottom-40 md:bottom-80 bottom-60  mx-auto  z-30" style={{ background: bgColor }}>
      <div className='flex flex-row '>

        <div className="modal-content flex  flex-col w-[60%]">

          <h1 className=' lg:text-[26px] md:text-[22px] text-[18px] text-start ml-8  mt-5 font-semibold text-[#080D1E]'  >
            {modalContent.title}
          </h1>

          <p className=' lg:text-[12px] md:text-[10px] text-[9px] text-start ml-8 mt-2  text-primary'>
            {modalContent.desc}
          </p>
          {modalContent.title === 'Park Smart' && <p className=' lg:text-[12px] md:text-[10px] text-[9px]  text-start ml-8 mt-2  text-primary'>
            Features : <span> <br></br> &nbsp; {modalContent.features[1]} </span>
            <span> <br></br> &nbsp; {modalContent.features[2]} </span>
            <span> <br></br> &nbsp; {modalContent.features[3]} </span>
          </p>
          }
          {modalContent.title === 'Park Smart' && <p className=' lg:text-[12px] md:text-[10px] text-[9px]  text-start ml-8 mt-2  text-primary'>
            Achievements : <span> <br></br> &nbsp; {modalContent.achievements[1]} </span>
            <span> <br></br> &nbsp; {modalContent.achievements[2]} </span>
            <span> <br></br> &nbsp; {modalContent.achievements[3]} </span>
          </p>}
          {modalContent.title === 'Gericht Restaurant' && <p className=' lg:text-[12px] md:text-[10px] text-[9px]  text-start ml-8 mt-2  text-primary'>
            Features : <span> <br></br> &nbsp; {modalContent.features[1]} </span>
            <span> <br></br> &nbsp; {modalContent.features[2]} </span>
          </p>}
          {modalContent.title === 'Drum Kit' && <p className=' lg:text-[12px] md:text-[10px] text-[9px]  text-start ml-8 mt-2  text-primary'>
            Features : <span> <br></br> &nbsp; {modalContent.features[1]} </span>
            <span> <br></br> &nbsp; {modalContent.features[2]} </span>
          </p>
          }
        </div>


        <div className='w-[40%] ' >
         
          <Project3dModel modalContent={modalContent} />
        </div>
        



        <div>
          <button className=' mr-3 text-2xl font-semibold text-[#080D1E] hover:text-white' onClick={closeModal}>x</button>

        </div>

      </div>





    </div>
  );
}

export default Modal;
