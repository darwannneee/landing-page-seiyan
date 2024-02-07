import React, { useState, useEffect } from "react";
import '../App';
import '../assets/font/font.css';
import SeiyanImg from "../assets/img/seiyan.png"
import AboutImage from "../assets/img/about.png"
import Utility from "../assets/img/utility.png"
import Roadmap from "../assets/img/roadmap.png"
import Sweep from "../assets/img/sweep.png"
import Customize from "../assets/img/customize.png"
import Gallery from "../assets/img/gallery.png"
import Discord from "../assets/img/Discord.png"
import Twitter from "../assets/img/Twitter.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    // Handle menu item click logic here
    alert(`${menuItem} clicked`);
  };

  return (
<div>
    {/* Header */}
    <nav className="bg-transparent w-full shadow-transparent2 flex-col">
      <div className="flex flex-col md:flex-row">
        <div className={`flex justify-between items-center py-6 px-6 md:border-none ${isOpen ? 'border-b' : 'none'}`}>
            <div>
              <img src={SeiyanImg} className="w-28 md:w-32 2xl:w-44" />
            </div>
            <div className="items-center block md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                  <path className={`${!isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  <path className={`${isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-between w-full md:items-center border md:border-none mb-2 md:mb-0`}>
          <div className="flex flex-col md:flex-row mx-auto">
           
          </div>
          <div className="flex flex-col md:flex-row px-6 py-4 mx-1">
            <a href="https://t.co/UbwhXktWOV">
              <img src={AboutImage} className="w-28 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Discord" />
            </a>
            <div className="relative">
              <button onClick={handleDropdownClick} className="focus:outline-none">
                <img src={Utility} className="w-[116px] 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Tools" />
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg">
                  <button
                    onClick={() => handleMenuItemClick('MenuItem1')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    $ZENSEI
                  </button>
                  <button
                    onClick={() => handleMenuItemClick('MenuItem2')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    MULTISIG
                  </button>
                  <button
                    onClick={() => handleMenuItemClick('MenuItem2')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    RAFFLE PLATFROM
                  </button>
                  <button
                    onClick={() => handleMenuItemClick('MenuItem2')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    NFT LENDING
                  </button>
                  <button
                    onClick={() => handleMenuItemClick('MenuItem2')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    CULT TOOL
                  </button>
                  {/* Add more menu items as needed */}
                </div>
              )}
            </div>
            <a href="https://twitter.com/SeiyanNFT">
              <img src={Roadmap} className="w-36 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Twitter" />
            </a>
            <a href="https://twitter.com/SeiyanNFT">
              <img src={Sweep} className="w-28 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Twitter" />
            </a>
            <a href="https://twitter.com/SeiyanNFT">
              <img src={Customize} className="w-40 w-2xl:w-44 mx-1 mt-1 md:mt-0" alt="Twitter" />
            </a>
            <a href="https://twitter.com/SeiyanNFT">
              <img src={Gallery} className="w-36 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Twitter" />
            </a>
            <a href="https://twitter.com/SeiyanNFT">
              <img src={Discord} className="w-9 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Twitter" />
            </a>
            <a href="https://twitter.com/SeiyanNFT">
              <img src={Twitter} className="w-9 2xl:w-44 mx-1 mt-1 md:mt-0" alt="Twitter" />
            </a>
        
          </div>
        </div>
      </div>  
    </nav>
</div>
  );
}

export default Navbar;
