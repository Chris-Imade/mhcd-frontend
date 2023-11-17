import React from 'react';
import PartnerImg from "../../images/partner-img.png";

const Partners = () => {
  const partners = [
    {
      image: PartnerImg
    },
    {
      image: PartnerImg
    },
    {
      image: PartnerImg
    },
    {
      image: PartnerImg
    },
    {
      image: PartnerImg
    },
  ]

  return (
    <div id='partners' className='my-[66px]'>
        <p className='text-[#EF6330] text-[22px] font-medium text-center uppercase' style={{ letterSpacing: "6px" }}>partners</p>
        <h3 className='text-[#46445C] mt-[14px] font-semibold text-[28.74px] text-center'>Meet Our Partners</h3>

        <div className='px-[129px] flex flex-wrap justify-center items-center mt-24'>
          {partners.map((item, index) => (
            <img className='mx-4' key={index} width={192.24} height={173.61} src={item.image} alt="item" />
          ))}
        </div>
    </div>
  )
}

export default Partners;