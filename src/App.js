import { useEffect, useState } from "react";
import './App.css';
import './assets/font/font.css'

import bgVideo from "./assets/img/bg.mp4"
import bgMobile from "./assets/img/bgmobile.mp4"
import Navbar from "./Components/Navbar";

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

      <div className="absolute w-full">
        <Navbar />
      </div>

      <div className="text-white text-center absolute top-1/2 ml-[170px] md:ml-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-[370px] 2xl:pt-[700px]">
        {/* Add your content on top of the video background */}
        <div className="flex mx-auto">
          <img src={Pallet} className="w-36 h-14 md:w-[249px] md:h-[78px] md:mx-5 mx-3 2xl:w-96 2xl:h-[120px]" alt="Pallet" />
          <img src={Dagora} className="w-36 h-14 md:w-[249px] md:h-[78px] 2xl:w-96 2xl:h-[120px]" alt="Dagora" />
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
