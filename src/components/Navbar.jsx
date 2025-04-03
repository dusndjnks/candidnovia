import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"} `}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-2xl md:text-2xl lg:text-4xl font-semibold font-serif">Candid Novia</div>
          <div className="hidden md:flex space-x-6 sm:text-2xl md:text-xl xl:text-2xl font-serif">
            <NavLink className="text-white hover:text-gray-300" to="/">Home</NavLink>
            <NavLink className="text-white hover:text-gray-300" to="projects">Our Projects</NavLink>
            <NavLink className="text-white hover:text-gray-300" to="about">About Us</NavLink>
            <NavLink className="text-white hover:text-gray-300" to="contact">Contact</NavLink>
          </div>
          <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      
      <div className={`md:hidden transition-all duration-300 mx-5    ${menuOpen ? "h-auto py-4 " : "h-0 py-0 overflow-hidden "} ${scrolling ? "" : "bg-black bg-opacity-80 backdrop-blur-md"} `}>
        <div className="flex flex-col items-center space-y-4 font-mono">
        <NavLink className="text-white hover:text-gray-300 text-lg" to="/">Home</NavLink>
        <NavLink className="text-white hover:text-gray-300 text-lg" to="projects">Our Projects</NavLink>
        <NavLink className="text-white hover:text-gray-300 text-lg" to="about">About Us</NavLink>
        <NavLink className="text-white hover:text-gray-300 text-lg" to="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
