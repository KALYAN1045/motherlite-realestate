import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Info, Phone, Menu,CalendarDays , X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur bg-black/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="./Motherlite-logo.png"
              alt="Motherlite Homes Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" isScrolled={isScrolled} />
            <NavLink to="/properties" icon={<Building2 className="w-5 h-5" />} text="Properties" isScrolled={isScrolled} />
            <NavLink to="/about" icon={<Info className="w-5 h-5" />} text="About" isScrolled={isScrolled} />
            <NavLink to="/contact" icon={<Phone className="w-5 h-5" />} text="Contact" isScrolled={isScrolled} />
            <NavLink to="/blog" icon={<CalendarDays className="w-5 h-5" />} text="Blog" isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/properties" icon={<Building2 className="w-5 h-5" />} text="Properties" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/about" icon={<Info className="w-5 h-5" />} text="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/contact" icon={<Phone className="w-5 h-5" />} text="Contact" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/blog" icon={<CalendarDays className="w-5 h-5" />} text="Blog" onClick={() => setIsMenuOpen(false)} />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, icon, text, isScrolled }: { to: string; icon: React.ReactNode; text: string; isScrolled: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 transition-colors duration-200 ${
      isScrolled ? "text-white hover:text-gray-300" : "text-black hover:text-primary-gold"
    }`}
  >
    {icon}
    <span className="font-poppins">{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text, onClick }: { to: string; icon: React.ReactNode; text: string; onClick: () => void }) => (
  <Link to={to} className="flex items-center space-x-2 p-3 hover:bg-gray-100 rounded-lg" onClick={onClick}>
    {icon}
    <span className="font-poppins">{text}</span>
  </Link>
);

export default Navbar;
