import './App.css'
import Banner from './Components/Banner'
import BannerFooter from './Components/BannerFooter'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Navbar from './Components/Navbar'

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();

  
}

const modelPromise = getData();

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <BannerFooter />
      <Models modelPromise={modelPromise } />
      <Footer/>

    </>
  )
}

export default App
