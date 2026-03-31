import { CiShoppingCart } from "react-icons/ci";


const Cart = ({ carts ,setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const handlePayment = () => {
    setCarts([])
    
  }
  const handleDelet = (item) => {
    const filterArray = carts.filter(c => c.id !== item.id);
    setCarts(filterArray);
  }
  return (
    <div className='w-10/12 mx-auto border border-gray-300 rounded-xl  mb-28 mt-10 p-10'>
      <h2 className='font-bold text-2xl'>Your Cart</h2>
      {
        carts.length ===0 ? <p className="text-3xl  flex justify-center items-center gap-2.5  "> <CiShoppingCart/> Cart is emty</p>:<div>
        {
          carts.map(item => <div key={item.id} className='flex mt-5 justify-between bg-gray-200/30 items-center shadow'>
            <div className="flex items-center gap-5 px-4 py-8 ">
              <div className=''>
                <img className='  w-12' src={item.icon} alt="" />
              
              </div>
              <div>
                <h2 className='text-xl'>{item.name}</h2>
                <p className='text-gray-400'>${item.price }</p>
              </div>
              

              
            </div>
            <div className='mr-5 ' ><button onClick={()=>handleDelet(item)}  className="text-red-600">remove</button></div>
            

            
          </div>)
        }
        <div className='flex justify-between mt-5'>
          <p className='text-gray-400'>Total:</p>
          <h3 className='font-bold text-xl'>${totalPrice}</h3>

        
        </div>
        <button onClick={handlePayment} className='btn btn-primary w-full mt-5'>Proceed to Checkout</button>

      </div>
      }

      
    </div>
  );
};

export default Cart;