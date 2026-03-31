import React from 'react';

const BannerFooter = () => {
  return (
    <div className='w-full h-64 bg-linear-to-r from-blue-500 to-purple-500 flex justify-around items-center'>

      <div className='text-center'>
        <h2 className='font-bold text-6xl text-white '>50K+</h2>
        <p className='text-white font-medium'>Active Users</p>
      </div>
        <div className="divider divider-horizontal py-20 "></div>

      <div className='text-center'>
        <h2 className='font-bold text-6xl text-white '>200+</h2>
        <p className='text-white font-medium'>Premium Tools</p>
      </div>
       <div className="divider divider-horizontal py-20 "></div>
      <div className='text-center'>
        <h2 className='font-bold text-6xl text-white '>4.9</h2>
        <p className='text-white font-medium'>Rating</p>
      </div>
      
    </div>
  );
};

export default BannerFooter;