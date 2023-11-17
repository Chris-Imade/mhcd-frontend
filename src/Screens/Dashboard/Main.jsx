import React from 'react';
import styles from './Main.module.css';
import Eclipse from '../../images/eclipse.png';
import Folder from '../../images/folder.png';
import Angle from '../../images/angle.png';

const Main = () => {
  return (
    <div className={`w-[791px] my-[42px] mx-[63px]`}>
        <div className='w-full flex justify-between'>
            <div className='w-2'></div>
            <p className='text-[17px] font-medium'>12th Nov 2023, Mon </p>
        </div>
        <div className={`w-full flex justify-between items-center mt-[57px] h-[193px] ${styles.background} py-[32px] px-[45px]`}>
            <div>
                <p className='text-[#252525] text-[20px] font-medium'>Welcome back Jeph</p>
                <p style={{ lineHeight: 2, marginTop: 38, fontSize: 20, fontWeight: 500, color: '#3C3C3C' }}>You’ve started a streak, you seem<br /> consistent keep it up.</p>
            </div>
            <img 
                src={Eclipse} 
                alt="Eclipse" 
                style={{
                    width: '166px',
                    height: '166px'
                }}
            />
        </div>
        <div className='flex items-center justify-between'>
            <div className='w-[293px] h-[193px] bg-[#FFFFFF] mt-[33px] flex flex-col items-center py-[17px] shadow-md'>
                <p className='text-[#B9B9B9] text-[17px] text-center mb-[27px]'>Certifications</p>
                <div className='w-[118px] h-[118px] rounded-full shadow-sm flex items-center justify-center'>
                    <p className='text-[111.784px]'>5</p>
                </div>
            </div>

            <div className='w-[452px] h-[193px] bg-[#FFFFFF] mt-[33px] flex flex-col py-[17px] shadow-md overflow-y-scroll'>
                <p className='text-[#B9B9B9] text-[17px] mb-[27px] px-[20px]'>Classes</p>
                <div className='px-[20px] flex items-center justify-between border-b-2 py-3 hover:bg-slate-100 transition-all duration-500 ease-in-out hover:cursor-pointer border-solid border-slate-300'>
                    <div className='flex items-center'>
                        <img src={Folder} alt="Folder" />
                        <p className='text-[#B9B9B9] text-[13.751px] ml-[15px]'>Web Development Intermediate</p>
                    </div>
                    <img className='hover:bg-slate-300 rounded-full p-1 transition-all duration-500 ease-in-out' src={Angle} alt="angle" />
                </div>
                <div className='px-[20px] flex items-center justify-between border-b-2 py-3 hover:bg-slate-100 transition-all duration-500 ease-in-out hover:cursor-pointer border-solid border-slate-300'>
                    <div className='flex items-center'>
                        <img src={Folder} alt="Folder" />
                        <p className='text-[#B9B9B9] text-[13.751px] ml-[15px]'>Web Development Intermediate</p>
                    </div>
                    <img className='hover:bg-slate-300 rounded-full p-1 transition-all duration-500 ease-in-out' src={Angle} alt="angle" />
                </div>
                <div className='px-[20px] flex items-center justify-between border-b-2 py-3 hover:bg-slate-100 transition-all duration-500 ease-in-out hover:cursor-pointer border-solid border-slate-300'>
                    <div className='flex items-center'>
                        <img src={Folder} alt="Folder" />
                        <p className='text-[#B9B9B9] text-[13.751px] ml-[15px]'>Web Development Intermediate</p>
                    </div>
                    <img className='hover:bg-slate-300 rounded-full p-1 transition-all duration-500 ease-in-out' src={Angle} alt="angle" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;