import React, { useState, useEffect } from "react";
import '../App';
import '../assets/font/font.css';
import SeiyanImg from "../assets/img/seiyan.png"
import DiscordImg from "../assets/img/Discord.png"
import TwitterImg from "../assets/img/Twitter.png"
import MultisigImg from "../assets/img/Multisig.png"
import ToolsImg from "../assets/img/Basictool.png"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
          <div className="flex flex-col md:flex-row px-6 py-4">
            <a href="https://t.co/UbwhXktWOV">
                <img src={DiscordImg} className="w-32 2xl:w-44" />
            </a>
            <a href="https://twitter.com/SeiyanNFT">
                <img src={TwitterImg} className="w-32 2xl:w-44" />
            </a>
            <a onClick={() => alert('Coming Soon') }>
                <img src={ToolsImg} className="w-40 2xl:w-56" />
            </a>
            <a onClick={() => alert('Coming Soon') }>
                <img src={MultisigImg} className="w-32 2xl:w-44" />
            </a>
          </div>
        </div>
      </div>  
    </nav>
</div>
  );
}

export default Navbar;
