import React from 'react'
import CoursesCard from './CoursesCard';
import { courses } from '../data';

const Course = () => {

  return (
    <div className='bg-[#F7F8FA] py-[57px] px-[121px] transition-all duration-500 ease-in-out'>
        <p className='text-[#EF6330] text-[22px] font-medium text-center uppercase' style={{ letterSpacing: "6px" }}>Course</p>
        <h3 className='text-[#46445C] mt-[14px] font-semibold text-[28.74px] text-center'>Our Popular Topics</h3>

        <div className='flex flex-wrap transition-all justify-center items-center duration-500 ease-in-out mt-[58px]'>
            {courses.map((item, index) => (
                <CoursesCard key={index} item={item} />
            ))}
        </div>
    </div>
  )
}

export default Course;