import React, { memo } from 'react';
import PartnerImg from "../../images/partner-img.png";
import Partner2 from "../../images/partner-1.jpeg";
import Partner3 from "../../images/partner-2.jpeg";
import Partner4 from "../../images/partner-3.jpeg";
import Partner5 from "../../images/partner-4.jpeg";
import style from './Partners.module.css';

const Partners = () => {
  const partners = [
    {
      image: PartnerImg
    },
    {
      image: Partner2
    },
    {
      image: Partner3
    },
    {
      image: Partner4
    },
    {
      image: Partner5
    },
  ]

  return (
    <div id='partners' className='my-[66px]'>
        <p className='text-[#EF6330] text-[22px] font-medium text-center uppercase' style={{ letterSpacing: "6px" }}>partners</p>
        <h3 className='text-[#46445C] mt-[14px] font-semibold text-[28.74px] text-center'>Meet Our Partners</h3>

        <div className='px-[129px] flex flex-wrap justify-center items-center mt-24'>
          {partners.map((item, index) => (
            <div className={`inline-block relative`}>
              <img style={{ transition: 'filter 0.3s ease' }} className={`mx-4`} key={index} width={192.24} height={173.61} src={item.image} alt="item" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default memo(Partners);