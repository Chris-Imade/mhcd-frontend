import React from 'react';
import Location from '../images/location-1.png';
import Phone from '../images/phone-1.png';
import Mail from '../images/mail-1.png';
import Right from '../images/right.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
        <div id='footer' className='bg-[#120503] w-[100vw] py-[91px] px-12 flex flex-col'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='text-[#EF6330] text-[22px] font-medium uppercase' style={{ letterSpacing: "6px" }}>get in touch</p>
                    <div className='flex items-center my-2'>
                        <img width={14} height={14} src={Location} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>Plot 13 -  15 Wiliams Avenue off Airport Road, <br />Evbuoda Quaers, Benin City, Edo State</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={14} height={14} src={Phone} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>+2348025872402</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={14} height={14} src={Mail} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>muyicx5@gmail.com</p>
                    </div>
                </div>

                <div>
                    <p className='text-[#EF6330] text-[22px] font-medium uppercase' style={{ letterSpacing: "6px" }}>our courses</p>
                    <div className='flex items-center my-2'>
                        <img width={6.63} height={9} src={Right} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>Web Design</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={6.63} height={9} src={Right} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>App Design</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={6.63} height={9} src={Right} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>Marketing</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={6.63} height={9} src={Right} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>Research</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={6.63} height={9} src={Right} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>Game development</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img width={6.63} height={9} src={Right} alt="Location" />
                        <p className='text-[10px] text-white ml-[7px]'>Search Engine Optimization (SEO)</p>
                    </div>
                </div>
                <div>
                    <p className='text-[#EF6330] text-[22px] font-medium uppercase' style={{ letterSpacing: "6px" }}>newsletter</p>
                    <p className='text-[14px] text-white '>Don’t miss out on all our exciting new features and student offers to<br /> boot your learning capacity.</p>
                    <div>
                        <input placeholder='Your Email Address' className={`outline-none lg:w-[353px] h-[50px] pl-4 mt-6 ${styles.inputShadow}`} type="text" />
                        <button className={`${styles.inputShadow} text-[17px] font-medium bg-[#44425A] hover:text-[#44425A] hover:bg-white w-[119.98px] h-[50px] text-white ml-2 transition-all duration-500 ease-in-out`}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[100vw] h-[1px] bg-white '></div>
        <div className='py-[26px] bg-[#120503] px-12'>
            <div className='flex items-center justify-between flex-col lg:flex-row'>
                <div>
                    <p className='text-white text-[14px]'>&copy; <span className='text-[#F24E1E]'>mhcd.com.</span> All Rights reserved. Designed by <span className='text-[#F24E1E]'>Smartweb-technologies</span> in collaboration with <span className='text-[#F24E1E]'>Dahlia Academy</span></p>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='text-white text-[14px] mx-3'><a href="#home">Privacy</a></li>
                        <li className='text-white text-[14px] mx-3'><a href="#home">Terms</a></li>
                        <li className='text-white text-[14px] mx-3'><a href="#home">FAQs</a></li>
                        <li className='text-white text-[14px] mx-3'><a href="#home">Help</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;