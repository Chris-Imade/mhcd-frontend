import React from 'react';
// @ts-ignore
import styles from './About.module.css';
// @ts-ignore
import AboutImg from '../../images/about-us.png';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div id='about' className='w-[100vw] lg:h-[752px] lg:py-[136px] py-[96px] flex-col lg:flex-row flex justify-center items-center'>
        <div className=''>
            <img width={435} src={AboutImg} alt="AboutUs" />
        </div>
        <div className='lg:ml-[33px] mt-4 lg:mt-0'>
            <p className='text-[#EF6330] text-[22px] font-medium uppercase' style={{ letterSpacing: "6px" }}>ABOUT US</p>
            <h3 className='text-[#46445C] mt-[14px] font-semibold text-[28.74px]'>Educating Africans at their convenient</h3>
            <p className='text-[22px] text-[#737373] font-normal mt-[15px]'>MUYICX’S Human Capacity Development MHCD<br /> Academy Ltd is a legally registered business entity<br /> in Nigeria to provide online and physical<br /> educational training, campaign and conducts<br /> academic activities globally. We train, develop and<br /> engage world-class volunteers</p>
            <button className={`${styles.shadow} bg-[#EF6330] w-[174.45px] h-[49.3px] mt-[26px] text-white text-[22px] font-medium transition-all duration-500 ease-in-out hover:bg-white hover:text-[#46445C]`}>
              <Link to={'/register'}>Start Now</Link>
            </button>
        </div>
    </div>
  )
}

export default AboutUs