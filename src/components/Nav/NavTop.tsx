import React from 'react';
// @ts-ignore
import Logo from '../../images/logo.png';
// @ts-ignore
import Location from '../../images/mdi_location.png';
// @ts-ignore
import Mail from '../../images/mail-1.png';
// @ts-ignore
import Phone from '../../images/phone.png';

const NavTop: React.FC = () => {
  return (
    <div className='flex justify-between py-[18px] border-b-[1px] border-solid border-slate-300 px-[62px] transition-all duration-500 ease-in-out items-center'>
        <div>
            <img width={60.12} height={52.46} src={Logo} alt="Logo" />
        </div>
        <div className='items-center hidden lg:flex'>
            <img className='mr-3' width={31.45} height={31.45} src={Location} alt="Location" />
            <div>
                <h2 className='font-semibold text-[17.3px] text-[#030000]'>Our Office</h2>
                <p className='text-[#4A4848] font-normal text-[11.01px]'>Plot 13 -  15 Wiliams Avenue off Airport Road,<br /> Evbuoda Quaers, Benin City, Edo State</p>
            </div>
        </div>
        <div className='items-center hidden lg:flex'>
            <img className='mr-3' width={31.45} height={31.45} src={Mail} alt="Mail" />
            <div>
                <h2 className='font-semibold text-[17.3px] text-[#030000]'>Email Us</h2>
                <p className='text-[#4A4848] font-normal text-[11.01px]'>muyicx5@gmail.com</p>
            </div>
        </div>
        <div className='items-center hidden lg:flex'>
            <img className='mr-3' width={31.45} height={31.45} src={Phone} alt="Phone" />
            <div>
                <h2 className='font-semibold text-[17.3px] text-[#030000]'>Call Us</h2>
                <p className='text-[#4A4848] font-normal text-[11.01px]'>+2348025872402</p>
            </div>
        </div>
        {/* Menu Right */}
        <div className='lg:hidden flex'>
            {/* <img src="" alt="" /> */}
            MENU
        </div>
    </div>
  )
}

export default NavTop