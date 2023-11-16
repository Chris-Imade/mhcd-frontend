import React, { useState } from 'react';
// @ts-ignore
import Quote from "../../images/quote.png";
// @ts-ignore
import styles from "./Testimonials.module.css";

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const testimonies = [
        {
            message: 'I can boldly say that I for one have seen and experience the value in MHCD ACademy’s course. I took the web train and have been enjoying it ever since.',
            name: 'Chinanza Adaeze',
            profession: 'Student',
        },
        {
            message: 'MHCD has changed my life and the way I look at the internet. I took a course in Cyber Security and ever since I have been exploiting vulnerabilities for the sole purpose of being the fix.',
            name: 'Anema David',
            profession: 'Student',
        },
        {
            message: 'I have embraced the concept of working from home since the lock-down and thus learning from the comfort of my home is definitely invaluable to me.',
            name: 'King Solomon',
            profession: 'Student',
        },
    ];

  return (
    <div className='my-32 flex flex-col justify-center items-center'>
        <p className='text-[#EF6330] text-[22px] font-medium text-center uppercase' style={{ letterSpacing: "6px" }}>testimonials</p>
        <h3 className='text-[#46445C] mt-[14px] font-semibold text-[28.74px] text-center'>What say our students</h3>

        
        <img src={Quote} alt="Quote" width={71} height={71} className='my-[16px] ' />
        <p className='lg:w-[655px] text-[22px] font-regular text-center'>{testimonies[index].message}</p>
        <div className='w-[100px] h-[100px] bg-slate-400 rounded-full mt-[21px] mb-[10px]'></div>
        <h3 className='text-[22px] font-medium'>{testimonies[index].name}</h3>
        <p className='text-[10.62px] font-normal text-[#6A6A6A]'>{testimonies[index].name}</p>
            

        <div className={`flex items-center mt-[16px]`}>
            <button onClick={() => setIndex(0)} className={`border-[4px] border-solid border-white w-[20.77px] rounded-full h-[20.77px] mx-2 ${index === 0 ? 'bg-black' : 'bg-[#F24E1E]'} ${styles.shadow} `}></button>
            <button onClick={() => setIndex(1)} className={`border-[4px] border-solid border-white w-[20.77px] rounded-full h-[20.77px] mx-2 ${index === 1 ? 'bg-black' : 'bg-[#F24E1E]'} ${styles.shadow} `}></button>
            <button onClick={() => setIndex(2)} className={`border-[4px] border-solid border-white w-[20.77px] rounded-full h-[20.77px] mx-2 ${index === 2 ? 'bg-black' : 'bg-[#F24E1E]'} ${styles.shadow} `}></button>
        </div>
    </div>
  )
}

export default Testimonials;