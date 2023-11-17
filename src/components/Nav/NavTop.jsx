import React, { useState } from 'react';
// @ts-ignore
import Logo from '../../images/logo.png';
// @ts-ignore
import Location from '../../images/mdi_location.png';
// @ts-ignore
import Mail from '../../images/mail-1.png';
// @ts-ignore
import Phone from '../../images/phone.png';
// @ts-ignore
import Hamburger from '../../images/hamburger.png';
// @ts-ignore
import Close from '../../images/close.png';

const NavTop = () => {
    const [menuActive, setMenuActive] = useState(false);
  return (
    <div className='flex flex-col lg:flex-row justify-between py-[18px] border-b-[1px] border-solid border-slate-300 px-[62px] transition-all duration-500 ease-in-out items-center'>
        <div className='flex justify-between items-center lg:block w-full flex-1'>
            <img width={60.12} height={52.46} src={Logo} alt="Logo" />
            {/* Below is visible only on large screens */}
            <div className='lg:hidden transition-all duration-500 ease-in-out'>
                <div className='flex transition-all duration-500 ease-in-out'>
                    {menuActive ? (
                            <img onClick={() => setMenuActive((prevState) => !prevState)} width={30} height={30} src={Close} alt="Close" />
                        ) : (
                            <img onClick={() => setMenuActive((prevState) => !prevState)} width={30} height={30} src={Hamburger} alt="Hamburger" />
                    )}
                </div>
            </div>
        </div>
        <div className='items-center hidden lg:flex flex-1'>
            <img className='mr-3' width={31.45} height={31.45} src={Location} alt="Location" />
            <div>
                <h2 className='font-semibold text-[17.3px] text-[#030000]'>Our Office</h2>
                <p className='text-[#4A4848] font-normal text-[11.01px]'>Plot 13 -  15 Wiliams Avenue off Airport Road,<br /> Evbuoda Quaers, Benin City, Edo State</p>
            </div>
        </div>
        <div className='items-center hidden lg:flex flex-1'>
            <img className='mr-3' width={31.45} height={31.45} src={Mail} alt="Mail" />
            <div>
                <h2 className='font-semibold text-[17.3px] text-[#030000]'>Email Us</h2>
                <p className='text-[#4A4848] font-normal text-[11.01px]'>muyicx5@gmail.com</p>
            </div>
        </div>
        <div className='items-center hidden lg:flex flex-1'>
            <img className='mr-3' width={31.45} height={31.45} src={Phone} alt="Phone" />
            <div>
                <h2 className='font-semibold text-[17.3px] text-[#030000]'>Call Us</h2>
                <p className='text-[#4A4848] font-normal text-[11.01px]'>+2348025872402</p>
            </div>
        </div>
        {/* Menu Right */}
        
        {menuActive && (
            <div className='w-full pt-4 transition-all duration-500 ease-in-out'>
                <ul className='text-left'>
                    <li className='transition-all duration-500 ease-in-out text-[#6D6B7E] text-[15.72px] font-medium hover:text-[#F24E1E] w-full border-b-2 borer-solid border-slate-200 py-2  hover:bg-gray-300'><a href="#home" className='mx-[9px]'>Home</a></li>
                    <li className='transition-all duration-500 ease-in-out text-[#6D6B7E] text-[15.72px] font-medium hover:text-[#F24E1E] w-full border-b-2 borer-solid border-slate-200 py-2  hover:bg-gray-300'><a href="#about" className='mx-[9px]'>About</a></li>
                    <li className='transition-all duration-500 ease-in-out text-[#6D6B7E] text-[15.72px] font-medium hover:text-[#F24E1E] w-full border-b-2 borer-solid border-slate-200 py-2  hover:bg-gray-300'><a href="#course" className='mx-[9px]'>Course</a></li>
                    <li className='transition-all duration-500 ease-in-out text-[#6D6B7E] text-[15.72px] font-medium hover:text-[#F24E1E] w-full border-b-2 borer-solid border-slate-200 py-2  hover:bg-gray-300'><a href="#partners" className='mx-[9px]'>Partners</a></li>
                    <li className='transition-all duration-500 ease-in-out text-[#6D6B7E] text-[15.72px] font-medium hover:text-[#F24E1E] w-full border-b-2 borer-solid border-slate-200 py-2  hover:bg-gray-300'><a href="#footer" className='mx-[9px]'>Contact</a></li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default NavTop