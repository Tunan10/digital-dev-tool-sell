import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import BannerFooter from './Components/BannerFooter'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Navbar from './Components/Navbar'

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();

  
}

const modelPromise = getData();

function App() {

const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);
  // console.log(carts)
  

  return (
    <>
      <Navbar />
      <Banner />
      <BannerFooter />

      <div className='mt-31 text-center'>
        <h2 className='text-5xl font-bold'> Premium Digital Tools</h2>
        <p className='text-lg font-medium'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      <div className='mt-10 '>
        
              {/* name of each tab group should be unique */}
          <div className="tabs tabs-box justify-center gap-5 bg-transparent">
          <input
  type="radio"
  name="my_tabs_1"
  className="tab rounded-full font-semibold 
  checked:bg-linear-to-r checked:from-blue-500 checked:to-purple-500 checked:text-white"
            aria-label="Products"
            onClick={()=>setActiveTab("Products")}
  defaultChecked
/>

<input
  type="radio"
  name="my_tabs_1"
  className="tab rounded-full font-semibold w-25 
  checked:bg-linear-to-r checked:from-blue-500 checked:to-purple-500 checked:text-white"
            aria-label="Cart"
            onClick={()=>setActiveTab("Cart")}
/>
            
          </div>

      </div>

      {activeTab === "Products" && <Models modelPromise={modelPromise} carts={carts} setCarts={ setCarts} />}
      
      {activeTab==="Cart" && <Cart carts={carts} setCarts={setCarts} />}
      <Footer/>

    </>
  )
}

export default App
