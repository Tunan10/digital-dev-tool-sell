import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ model,carts, setCarts }) => {
  const [isSubcribed, setIsSubcribed] = useState(false);
  const handleSubcription = () => {
    setIsSubcribed(true)

    const isFound = carts.find(item => item.id === model.id)
    if (isFound) {
      toast.error("Item alreay in cart")
      return
    }
    

    setCarts([...carts, model])
    toast.success("Item added to cart")
  }

  
  
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
              <button onClick={handleSubcription} className={`btn btn-primary w-full rounded-full ${isSubcribed ?"bg-green-500 text-white border-none" :"bg-blue-500 text-white border-none"}`}>
                
                {isSubcribed ? "✔ Added to cart" : "Buy Now"}</button>
    </div>
  </div>
</div>

          </div>
    </div>
  );
};

export default Card;