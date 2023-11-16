import React from 'react';
// @ts-ignore
import DashboardLogo from '../../images/dashboard-logo.png';
// @ts-ignore
import DashboardLayout from '../../images/dh-layout.png';
// @ts-ignore
import Book from "../../images/clarity_book-line.png";
// @ts-ignore
import Edit from "../../images/ep_edit.png";
// @ts-ignore
import Certificate from "../../images/ph_certificate.png";
// @ts-ignore

const Aside = () => {
  return (
    <div className='py-[34px] flex flex-col justify-between bg-[#FEFEFE] w-[245px] shadow-md'>
        {/* TOP */}
        <div>
            <div className='flex items-center px-[30px]'>
                <img className='mr-[14px]' width={35} height={35} src={DashboardLogo} alt="DashboardLogo" />
                <h4 className='text-[17px] font-semibold'>My Area</h4>
            </div>
            <div className='flex items-center mt-[44px] px-[30px] h-5 hover:cursor-pointer transition-all duration-500 ease-in-out'>
                <img className='mr-[14px]' width={35} height={35} src={DashboardLayout} alt="DashboardLogo" />
                <h4 className='text-[17px] font-medium'>Dashboard</h4>
            </div>
            <div className='flex items-center mt-[44px] px-[30px] h-5 hover:border-r-[1px] hover:border-solid hover:border-[#F24E1E] hover:cursor-pointer transition-all duration-500 ease-in-out'>
                <img className='mr-[14px]' width={35} height={35} src={Book} alt="DashboardLogo" />
                <h4 className='text-[17px] font-medium text-[#B1B6D1]'>Resources</h4>
            </div>
            <div className='flex items-center mt-[44px] px-[30px] h-5 hover:border-r-[1px] hover:border-solid hover:border-[#F24E1E] hover:cursor-pointer transition-all duration-500 ease-in-out'>
                <img className='mr-[14px]' width={35} height={35} src={Certificate} alt="DashboardLogo" />
                <h4 className='text-[17px] font-medium text-[#B1B6D1]'>Certificates</h4>
            </div>
            <div className='flex items-center mt-[44px] px-[30px] h-5 hover:border-r-[1px] hover:border-solid hover:border-[#F24E1E] hover:cursor-pointer transition-all duration-500 ease-in-out'>
                <img className='mr-[14px]' width={35} height={35} src={Edit} alt="DashboardLogo" />
                <h4 className='text-[17px] font-medium text-[#B1B6D1]'>Settings</h4>
            </div>
        </div>
        {/* BOTTOM */}
        <div>
            <button className='mx-[30px] text-[17px] font-medium bg-[#EF913B] w-[143px] h-[40px] text-white transition-all duration-500 ease-in-out hover:opacity-50'>Logout</button>
        </div>
    </div>
  )
}

export default Aside;