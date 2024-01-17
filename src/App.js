import { useEffect, useState } from "react";
import './App.css';

import bgVideo from "./assets/img/bg.mp4"
import bgMobile from "./assets/img/bgmobile.mp4"

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
    <div className="App">
      <video autoPlay playsInline loop muted className="w-full h-full object-cover absolute top-0 left-0">
        <source src={isMobile ? bgMobile : bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white text-center absolute">
        {/* Add your content on top of the video background */}
        <h1 className="text-4xl font-bold text-white"></h1>
      </div>
    </div>
  );
}

export default App;
