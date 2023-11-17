import React from 'react';
import Course1 from '../../images/courses-1.png';
import Course2 from '../../images/courses-2.png';
import Course3 from '../../images/courses-3.png';
import Course4 from '../../images/courses-4.png';
import Course5 from '../../images/courses-5.png';
import SubjectCard from './SubjectCard';

const Subjects = () => {

    const subjects = [
        {
            title: 'Web Design',
            image: Course1
        },
        {
            title: 'Game Design',
            image: Course2
        },
        {
            title: 'App Design',
            image: Course3
        },
        {
            title: 'Marketing',
            image: Course4
        },
        {
            title: 'CEO',
            image: Course5
        },
        {
            title: 'Packaging',
            image: Course1
        },
        {
            title: 'Research',
            image: Course2
        },
        {
            title: 'Data Science',
            image: Course3
        },
    ]

  return (
    <div id='subjects' className='bg-[#F7F8FA] py-[57px] px-[121px] transition-all duration-500 ease-in-out'>
        <p className='text-[#EF6330] text-[22px] font-medium text-center uppercase' style={{ letterSpacing: "6px" }}>subjects</p>
        <h3 className='text-[#46445C] mt-[14px] font-semibold text-[28.74px] text-center'>Explore Top Subjects</h3>

        <div className='flex flex-wrap transition-all justify-center items-center duration-500 ease-in-out'>
            {subjects.map((item, index) => (
                <SubjectCard key={index} item={item} />
            ))}
        </div>
    </div>
  )
}

export default Subjects;