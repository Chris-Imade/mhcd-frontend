import React, { useState } from 'react';
// @ts-ignore
import HeaderImg1 from "../images/header-2.png";
// @ts-ignore
import RightControl from "../images/right-control.png";
// @ts-ignore
import LeftControl from "../images/left-control.png";
// @ts-ignore
import HeaderTxt from "../images/header-txt.png";
// @ts-ignore
import styles from "./Hero.module.css";


const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);

    const carouselItems = [
        {
            image: HeaderImg1,
            innerTitle: '',
            alt: 'Header Image 1'
        }
    ]
  return (
    <div className='relative h-[100vh] flex justify-center items-center transition-all duration-500 ease-in-out'>
        <img className='object-cover w-full h-full' src={carouselItems[index].image} alt={carouselItems[index].alt} />
        {/* <div className='bg-gray-800 h-full w-full absolute top-0 left-0 right-0 bottom-0'></div> */}
        <div className='absolute h-full w-[100vw] top-0 flex justify-between items-center lg:px-8'>
            <img width={40} height={40} src={LeftControl} alt="LeftControl" />
            <div className='relative mx-6 lg-mx-0'>
                <img width={692} height={273} src={HeaderTxt} alt="HeaderTxt" />
                <button className={`absolute bottom-0 left-0 p-1 lg:p-0 lg:text-[22px] bg-[#EF6330] lg:w-[174.45px] lg:h-[49.3px] hover:bg-white hover:text-[#EF6330] transition-all duration-500 ease-in-out font-medium text-white ${styles.shadow}`}>Start Now</button>
            </div>
            <img width={40} height={40} src={RightControl} alt="RightControl" />
        </div>
    </div>
  )
}

export default Hero