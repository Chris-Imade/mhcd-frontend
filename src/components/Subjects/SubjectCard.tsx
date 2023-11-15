import React, { useState } from 'react';

interface SubjectProp {
    item: {
        title: string;
        image: string;
    }
}

const SubjectCard:React.FC<SubjectProp> = ({ item }) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='min-w-[234px] min-h-[147px] w-[234px] h-[147px] relative flex justify-center items-center m-5 overflow-hidden transition-all duration-500 ease-in-out hover:cursor-pointer'>
        <img className={`w-full h-full transition-all duration-500 ease-in-out ${hovering ? 'rotate-12 scale-125' : ''}`} src={item.image} alt={item.title} />
        <h3 className='absolute font-semibold text-[28.74px] text-white'>{item.title}</h3>
    </div>
  )
}

export default SubjectCard;