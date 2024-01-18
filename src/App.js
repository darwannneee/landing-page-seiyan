import { useEffect, useState } from "react";
import './App.css';
import './assets/font/font.css'

import bgVideo from "./assets/img/bg.mp4"
import bgMobile from "./assets/img/bgmobile.mp4"


import Pallet from "./assets/img/PALLET.png"
import Dagora from "./assets/img/DAGORA.png"
import Ballz from "./assets/img/$Ballz.png"
import Arrow from "./assets/img/arrow.png"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Call handleResize when the component mounts and when the window size changes
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    

  return (
    <div className="App relative h-screen">
      <video autoPlay playsInline loop muted className="w-full h-full object-cover absolute top-0 left-0">
        <source src={isMobile ? bgMobile : bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-[370px] 2xl:pt-[560px]">
        {/* Add your content on top of the video background */}
        <div className="flex mx-auto">
          <img src={Pallet} className="w-[249px] h-[78px] mx-5 2xl:w-80 2xl:h-[90px]" alt="Pallet" />
          <img src={Dagora} className="w-[249px] h-[78px] 2xl:w-80 2xl:h-[90px]" alt="Dagora" />
        </div>

        
        <div className="relative">
          <input className="w-[520px] h-[55px] ml-5 rounded-2xl text-black text-center MBF pl-10" placeholder="DROP ADDRESS HERE" />

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#3C66F0] w-[40px] h-[38px] flex items-center justify-center rounded-xl mt-0">
            <img src={Arrow} className="w-[17px] font-bold" alt="Arrow Icon" />
          </div>
        </div>
      </div>

      {/* <div className="text-white text-center absolute -bottom-9 -right-24 transform -translate-x-1/2 -translate-y-1/2"> */}
        {/* Add your content on top of the video background */}
        {/* <img src={Ballz} className="w-64 h-[100px] 2xl:w-80 2xl:h-[120px]" alt="Dagora" />
      </div> */}
    </div>
  );
}

export default App;
