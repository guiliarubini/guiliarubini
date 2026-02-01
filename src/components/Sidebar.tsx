import React, { KeyboardEvent } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

interface NavItem {
  id: string;
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onToggleSidebar: () => void;
  onCloseSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isMobile,
  onToggleSidebar,
  onCloseSidebar,
}) => {
  const navItems: NavItem[] = [
    { id: 'about', label: 'About me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contacts' },
  ];

  const handleHamburgerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onToggleSidebar();
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      onCloseSidebar();
    }
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  const renderNavItems = () =>
    navItems.map((item) => (
      <li key={item.id} className="w-full mb-2">
        <button
          type="button"
          onClick={() => handleNavClick(item.id)}
          className="w-full py-2 text-center text-white hover:text-white/70 transition-colors duration-300"
        >
          {item.label}
        </button>
      </li>
    ));

  return (
    <>
      {/* Hamburger Menu - Always Visible */}
      <div
        className="fixed top-4 left-4 w-12 h-12 bg-black/80 border border-white/20 rounded-full shadow-md flex items-center justify-center text-2xl text-white cursor-pointer z-50 transition-colors duration-300 hover:bg-black hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
        onClick={onToggleSidebar}
        role="button"
        tabIndex={0}
        onKeyDown={handleHamburgerKeyDown}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black/95 backdrop-blur-sm border-r border-white/10 shadow-lg p-5 flex flex-col items-center transform transition-transform duration-300 z-[100] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isMobile ? 'w-2/5' : 'w-64'}`}
      >
        {/* Close Button */}
        <button
          onClick={onCloseSidebar}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Close Sidebar"
        >
          <FaTimes size={20} />
        </button>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Giulia Rubini"
          className="w-32 h-32 rounded-full object-cover mb-5"
        />
        <h1 className="text-2xl font-semibold text-center text-white">Giulia Rubini</h1>
        <p className="mt-2 mb-5 text-white/70 text-center">
          Fashion Designer
        </p>

        {/* Navigation Links */}
        <nav className="w-full">
          <ul className="flex flex-col items-center list-none">
            {renderNavItems()}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="mt-auto text-white/40 text-center">
          <p>© 2025 Giulia Rubini</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
