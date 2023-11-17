import React from 'react';
// @ts-ignore
import Book from "../../images/book.png";
// @ts-ignore
import DropDown from "../../images/dd.png";
import { Link } from 'react-router-dom';

const NavBottom = () => {
  return (
    <div className='lg:flex items-center justify-between px-[62px] hidden'>
        <div className='flex items-center'>
            <a href={'#subjects'} className='flex items-center justify-between w-[276.76px] h-[61.33px] px-[26px] bg-[#F2F1F8]'>
                <img width={28.3} height={28.3} src={Book} alt="Book" />
                <h3 className='text-[18.87px] font-medium text-[#F24E1E]'>Subjects</h3>
                {/* <img width={31.45} height={31.45} src={DropDown} alt="DropDown" /> */}
                <div className='w-4'></div>
            </a>
            <div className='lg:ml-[40px]'>
                <ul className='flex'>
                    <li><a href="#home" className='mx-[9px]'>Home</a></li>
                    <li><a href="#about" className='mx-[9px]'>About</a></li>
                    <li><a href="#course" className='mx-[9px]'>Course</a></li>
                    <li><a href="#partners" className='mx-[9px]'>Partners</a></li>
                    <li><a href="#footer" className='mx-[9px]'>Contact</a></li>
                </ul>
            </div>
        </div>
        <button className='text-white bg-[#EF6330] text-[18.87px] py-[5px] px-[10px] transition-all duration-500 ease-in-out hover:bg-white hover:border-[1px] border-solid border-[#EF6330] hover:text-[#EF6330]'>
            <Link to={'/register'}>Join Now</Link>
        </button>
    </div>
  )
}

export default NavBottom;