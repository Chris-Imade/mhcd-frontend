import React from 'react';
// @ts-ignore
import ProfileImg from '../../images/Profile.png';
// @ts-ignore
import Mail from '../../images/tabler_mail.png';
// @ts-ignore
import Phone from '../../images/phone-line.png';
// @ts-ignore
import Person from '../../images/md_person.png';

const Profile = () => {
  return (
    <div className='bg-[#FEFEFE] w-[245px] py-[42px] px-[24px] shadow-md'>
      <p className='text-[17px] font-medium'>Profile</p>
      <div className='flex flex-col w-full justify-center items-center mt-[81px] text-center'>
        <img src={ProfileImg} width={134} height={134} alt="Profile" />
        <p className='text-[#545454] font-medium text-[14.55px] mt-[10px]'>Jefferson Minch</p>
        <p className='text-[#A4A4A4] font-medium text-[10px] mt-[5px]'>Student</p>
      </div>
      <div>
        <div className='flex items-center my-2'>
            <img width={15} height={16} src={Mail} alt="Location" />
            <p className='text-[10px] text-black ml-[7px]'>Email: jeffersonminch@gmail.com</p>
        </div>
        <div className='flex items-center my-2'>
            <img width={15} height={15} src={Phone} alt="Location" />
            <p className='text-[10px] text-black ml-[7px]'>Phone: +234 708 0896 901</p>
        </div>
        <div className='flex items-center my-2'>
            <img width={15} height={15} src={Person} alt="Location" />
            <p className='text-[10px] text-black ml-[7px]'>About: lorem ipsum dolor larat fella ip dum lte</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;