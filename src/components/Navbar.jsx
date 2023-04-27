import React, { useRef, useState } from 'react';
import mainLogo from '../assets/mainLogo.png';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { doShowSide, saveWidthAside } from '../features/mainSlice';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showAside } = useSelector((store) => store.main);
  const refNav = useRef(null);
  const closeAside = (e) => {
    if (e.clientX > refNav.current.offsetWidth) {
      dispatch(doShowSide('hide'));
      dispatch(saveWidthAside(refNav.current.offsetWidth));
    }
  };
  return (
    <nav className='navbar' onClick={closeAside}>
      <div className='flex  gap-x-5 items-center relative justify-start md:justify-start md:gap-x-28  h-[3rem] '>
        <button
          className='ml-4 md:hidden'
          onClick={() => dispatch(doShowSide('show'))}
        >
          <GiHamburgerMenu className='text-[2rem] text-slate-400' />
        </button>

        <img
          src={mainLogo}
          alt=''
          className='object-cover w-[7rem] my-2 absolute left-1/2 -translate-x-1/2 md:relative md:left-1 md:translate-x-1 '
          onClick={() => navigate('/')}
        />
        <ul
          ref={refNav}
          className={`absolute top-0 left-0 w-[10rem] bg-white text-black h-screen z-[20] flex flex-col gap-y-4 items-center ] ${showAside} transition-all ease-in md:h-fit md:translate-x-[0] md:justify-between md:flex-row md:items-center md:relative md:gap-x-8 `}
        >
          <li className=' w-full flex justify-center'>
            <Link to={'/'} className='text-sky-500 text-[1.4rem]'>
              Home
            </Link>
          </li>
          <li className=' w-full flex justify-center'>
            <Link to={'/'} className='text-sky-500 text-[1.4rem]'>
              Search
            </Link>
          </li>
          <li className=' w-full flex justify-center'>
            <Link to={'/'} className='text-sky-500 text-[1.4rem]'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
