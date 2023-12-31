import React from 'react';
import styles from "./Course.module.css";
import Group from "../images/group.png";
import Star from "../images/star.png";
import Time from "../images/time.png";



const CoursesCard = ({ item }) => {
  return (
    <div className={`w-[317px] bg-[#F2F1F8] mx-[21px] hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out mb-8 ${styles.shadow}`}>
        <div className=''>
            <img src={item.image} alt={item.title} className='w-[317px] h-[165px]' />
        </div>
        <div className='mt-[16px] mx-[21px]'>
            <div className='flex justify-between mb-[18px]'>
                <div className='flex items-center'>
                    <img width={16.82} height={13.67} src={Group} alt="Group" />
                    <h1 className='ml-2 text-[10px]'>{item.enrolled} Students</h1>
                </div>
                <div className='flex items-center'>
                    <img width={16.82} height={13.67} src={Time} alt="Time" />
                    <h1 className='ml-2 text-[10px]'>{item.duration}</h1>
                </div>
            </div>
            <p className='text-[17.38px] font-medium text-[#444343]'>
                {item.title}
            </p>
            <div className='mt-[45px]'>
                <hr className='w-[317px] ml-[-1.35rem]' />
                <div className='flex justify-between my-[16px]'>
                    <div className='flex items-center'>
                        <img width={16.82} height={13.67} src={Star} alt="Group" />
                        <h1 className='ml-2 text-[10px]'>{item.rating.star} ({item.rating.count})</h1>
                    </div>
                    <div className='flex items-center'>
                        <img width={16.82} height={13.67} src={Time} alt="Time" />
                        <h1 className='ml-2 text-[10px]'>{item.duration}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesCard;