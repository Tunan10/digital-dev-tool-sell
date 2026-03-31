import { FaPlay } from "react-icons/fa";
import BannerImage from "../assets/banner.png";
import BlueDot from "../assets/blueDot.png"
const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden p-5">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2  bg-[#E1E7FF]  text-[#4F39F6]  text-sm font-medium px-5 py-2 rounded-full mt-10">
           <img src={BlueDot} alt="" /> 
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tighter ">
            Supercharge Your
            <br />
            <span className="">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
          

            <button className="btn bg-linear-to-r from-blue-500 to-purple-500 rounded-full text-white">
              Explore Products
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
            <button className="btn btn-outline btn-primary rounded-full  "><FaPlay/> Watch Demo</button>
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;