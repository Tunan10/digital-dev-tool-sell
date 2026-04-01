import React from 'react';

const SectionTransform = () => {
  return (
    <div className='bg-linear-to-r from-blue-500 to-purple-500 text-center py-15'>

      <h1 className='text-white text-2xl font-bold '>Ready to Transform Your Workflow?</h1>
      <p className='text-white mt-3 font-light'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
      <div className='flex justify-center mt-5 gap-5  '>
        <button className='btn bg-white rounded-full  text-purple-700'>Explore Products</button>
        <button className='btn btn-outline text-white rounded-full' >View Pricing</button>
      </div>
      
    </div>
  );
};

export default SectionTransform;