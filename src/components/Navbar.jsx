import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { ContactButton, navLinks } from '../constants'
import { logo, logoAnimated, menu, close } from '../assets'


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: '2px 8px',
    borderRadius: 6,
    backgroundColor: isHovered ? 'white' : '#d96c3d',
    color: isHovered ? 'black' : 'white',
    transition: 'background-color 0.5s, color 0.5s',

  };


  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={
      `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-primary  ` 
    } style={{ backgroundColor: 'rgba(5, 8, 22, 0.75)' }}>

      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to='/' className='flex items-center gap-2 ' onClick={() => { setActive(''); window.scrollTo(0, 0) }}>
          <img src={logoAnimated} alt='logo' className=' object-contain md:w-[50px] md:h-[50px]  w-[35px] h-[35px]'  />
          <p className='text-white text-[20px] font-bold cursor-pointer flex'>Apeksha &nbsp;
            <span className='lg:block hidden'>| Software Developer </span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'}
             hover:text-white text=[18px] font-mediun cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}



          {ContactButton.map((button) => (

            <li  key={button.id}><button className={`text=[18px] font-mediun cursor-pointer`} style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} onClick={() => setActive(button.title)}>
              <a href={`#${button.id}`}>{button.title}</a></button></li>
          ))}

        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-8 h-8 object-contain cursor-pointer'
            onClick={() => { setToggle(!toggle) }} />

          <div className={`${!toggle ? 'hidden' : 'flex'} 
          p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none  flex justify-end items-start flex-col  gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'}
                  hover:text-white text=[18px] font-poppins text-[16px] font-mediun cursor-pointer`}
                  onClick={() => { setToggle(!toggle); setActive(link.title) }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              {ContactButton.map((button) => (

                <li key={button.id}><button className={`text=[18px] font-mediun cursor-pointer`} style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)} onClick={() => setActive(button.title)}>
                  <a href={`#${button.id}`}>{button.title}</a></button></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar