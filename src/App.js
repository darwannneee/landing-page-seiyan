import { useEffect, useState } from "react";
import './App.css';

import bgVideo from "./assets/img/bg.mp4"
import bgMobile from "./assets/img/bgmobile.mp4"


import Pallet from "./assets/img/PALLET.png"
import Dagora from "./assets/img/DAGORA.png"
import Ballz from "./assets/img/$Ballz.png"

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
      <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-[370px]">
        {/* Add your content on top of the video background */}
        <div className="flex mx-auto">
          <img src={Pallet} className="w-60 h-[70px] mx-5" alt="Pallet" />
          <img src={Dagora} className="w-60 h-[70px]" alt="Dagora" />
        </div>
      </div>

      <div className="text-white text-center absolute -bottom-8 -right-20 transform -translate-x-1/2 -translate-y-1/2">
        {/* Add your content on top of the video background */}
        <img src={Ballz} className="w-60 h-[100px]" alt="Dagora" />
      </div>
    </div>
  );
}

export default App;
