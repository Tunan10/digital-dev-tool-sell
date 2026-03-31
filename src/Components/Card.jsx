import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Card = ({model}) => {
  return (
    <div>
      <div className=' mt-3'>
            <div className="card lg:card-side bg-base-100 shadow-sm">

              
              <div className="card-body ">
            <div className="flex justify-between items-center">
              <div className='w-14 border border-gray-400 rounded-full flex justify-between'>
              <img className='m-2 w-10 h-9   ' src={model.icon} alt="" />
              
              </div>
              <span className={`${model.tagColor} px-1 text-sm py-1 rounded-full  md:px-4 `}>
  {model.tag}
</span>
            </div>
  
                
                <h2 className="card-title text-2xl">{ model.name}</h2>
                <p>{model.description}</p>
            <h2 className='font-bold text-xl'>${model.price}<span>/mo</span></h2>
            <div>
              <ul className="mt-2 space-y-1">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              
             
              <span className="text-green-500">✔</span>

              
              <span>{feature}</span>

            </li>
          ))}
        </ul>
                    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full rounded-full">Buy Now</button>
    </div>
  </div>
</div>

          </div>
    </div>
  );
};

export default Card;