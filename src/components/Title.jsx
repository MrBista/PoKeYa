import React from 'react';
import titleLogo from '../assets/title.png';
const Title = () => {
  return (
    <div
      className='relative  w-full bg-center  h-[6rem] bg-cover bg-no-repeat flex justify-center items-center'
      style={{ backgroundImage: `url(${titleLogo})` }}
    >
      <h1 className='text-black text-[2rem] font-mono'>PoKe yA</h1>
    </div>
  );
};

export default Title;
