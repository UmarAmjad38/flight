import React, { useState, useEffect } from 'react';
import logoWhite from '../../assets/xpresstripz_logo_white.png';
import logoColor from '../../assets/xpresstripz_logo_main.png';
import { AiOutlineGlobal } from 'react-icons/ai';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logo = isScrolled ? logoColor : logoWhite;
  const textColor = isScrolled ? 'text-gray-700' : 'text-white';
  const navBackground = isScrolled ? 'bg-white shadow-md' : 'bg-transparent';

  return (
    <header className={`fixed top-0 bg-black left-0 w-full z-50 transition-colors duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="">
          <a href="/">
            <img src={logo} alt="Xpresstrip Logo" className="h-10 md:h-12 transition-all duration-300" />
          </a>
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          <div className={`flex items-center gap-2 cursor-pointer ${textColor}`}>
            <AiOutlineGlobal size={22} />
            <span className="font-medium hidden md:block">EN</span>
          </div>
          <button className="bg-[#ffba00] hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;