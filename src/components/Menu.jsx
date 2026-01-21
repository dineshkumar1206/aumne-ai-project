import React from 'react';
import logo from "../assets/logo.png";

const Menu = () => {
  return (
    <div>
        <nav className="w-full h-25 bg-black flex items-center px-10">
  
  {/* Logo */}
  <div className="flex items-center">
    <img src={logo} alt="Logo" width="90" />
  </div>

  <div className="flex-1"></div>

  {/* Navigation */}
  <ul className="flex items-center gap-8 text-white">
    <li className="cursor-pointer">Solutions</li>
    <li className="cursor-pointer">Vision</li>
    <li className="cursor-pointer">Programs</li>
    <li className="cursor-pointer">Blog</li>

    <li className="flex items-center gap-2 cursor-pointer">
      <span>👤</span>
      Log In
    </li>
    <button className="bg-blue-600 px-4 py-2 rounded-lg">
      Get Started
    </button>
  </ul>
</nav> 
    </div>
  );
};

export default Menu;