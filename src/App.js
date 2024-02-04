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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    

  return (
    <div className="App relative h-screen">
      <video autoPlay playsInline loop muted className="h-screen w-full object-cover absolute">
        <source src={isMobile ? bgMobile : bgVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

      <div className="absolute w-full">
        <Navbar />
      </div>

      <div className="text-white text-center pt-36 2xl:pt-64 absolute top-1/2 left-1/2 -translate-x-1/2">
        {/* Add your content on top of the video background */}
        <div className="flex items-center justify-center">
          <img src={Pallet} className="w-40 h-14 md:w-56 md:h-20 2xl:w-96 2xl:h-32 mx-2 md:mx-5" alt="Pallet" />
          <img src={Dagora} className="w-40 h-14 md:w-56 md:h-20 2xl:w-96 2xl:h-32" alt="Dagora" />
        </div>
      </div>

    </div>
  );
}

export default App;
