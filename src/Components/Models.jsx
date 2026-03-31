import React, { use } from 'react';
import Card from './Card';

const Models = ({ modelPromise }) => {
  const models = use(modelPromise)
  console.log(models);
  return (
    <>
      <div className='mt-31 text-center'>
        <h2 className='text-5xl font-bold'> Premium Digital Tools</h2>
        <p className='text-lg font-medium'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      
      <div className='w-10/12 mx-auto  grid grid-cols-1 gap-5  sm:grid-cols-3 mt-11 '>
        {
          models.map((model) =>
            <Card key={model.id} model={ model} />
          
          )
        }
      </div>
    </>
  );
};

export default Models;