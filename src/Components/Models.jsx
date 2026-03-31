import React, { use } from 'react';
import Card from './Card';

const Models = ({ modelPromise,carts, setCarts }) => {
  const models = use(modelPromise);

  
  
  return (
    <>
      
      
      <div className='w-10/12 mx-auto  grid grid-cols-1 gap-5  sm:grid-cols-3 mt-11 '>
        {
          models.map((model) =>
            <Card key={model.id} model={ model} carts={carts} setCarts={ setCarts}  />
          
          
          )
          
        }
        
        
      </div>
    </>
  );
};

export default Models;