import React from 'react';
import { FaBars } from 'react-icons/fa';

interface HeaderProps {
  onMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
  return (
    <header className="lg:hidden flex items-center p-4 bg-[#191919] shadow-md sticky top-0 z-30">
      <button
        onClick={onMenuOpen}
        aria-label="Open menu"
        className="text-white p-2"
      >
        <FaBars size={20} />
      </button>
      <h1 className="text-xl font-bold ml-4">Greetings, Traveler 👋</h1>
    </header>
  );
};

export default Header;
