import React, { KeyboardEvent } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
      <li key={item.id} className="w-full mb-4">
        <button
          type="button"
          onClick={() => handleNavClick(item.id)}
          className="w-full py-3 text-center text-white uppercase tracking-luxury text-xs font-sans hover:text-white/60 transition-all duration-500"
        >
          {item.label}
        </button>
      </li>
    ));

  return (
    <>
      {/* Hamburger Menu - Always Visible */}
      <div
        className="fixed top-6 left-6 w-14 h-14 bg-black border border-white/10 rounded-none flex items-center justify-center text-xl text-white cursor-pointer z-50 transition-all duration-500 hover:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
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
        className={`fixed top-0 left-0 h-full bg-black border-r border-white/10 p-8 flex flex-col items-center transform transition-transform duration-500 z-[100] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isMobile ? 'w-2/5' : 'w-72'}`}
      >
        {/* Close Button */}
        <button
          onClick={onCloseSidebar}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-500"
          aria-label="Close Sidebar"
        >
          <FaTimes size={18} />
        </button>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Giulia Rubini"
          className="w-36 h-36 rounded-none object-cover mb-8 mt-12 border border-white/10"
        />
        <h1 className="text-2xl font-serif text-center text-white tracking-editorial mb-2">Giulia Rubini</h1>

                <p className="mt-1 mb-2 text-white/50 text-center text-xs uppercase tracking-luxury font-sans">
          Fashion Designer
        </p>
        
        {/* Social Links */}
        <div className="mb-8 flex gap-6 justify-center">
          <a 
            href="mailto:g.rubini.fashiondesigner@gmail.com"
            className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </a>
          <a 
            href="tel:+393492959753"
            className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
            aria-label="Phone"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/giulia-rubini-387550177/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
          <a 
            href="https://www.instagram.com/giuliarubinifashiondesigner?igsh=bXE1YmtqdjI0ODN1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-all duration-500 hover:scale-110"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
        </div>
        


        {/* Navigation Links */}
        <nav className="w-full mt-4">
          <ul className="flex flex-col items-center list-none">
            {renderNavItems()}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="mt-auto text-white/30 text-center text-xs font-sans tracking-wide">
          <p>© 2026 Giulia Rubini</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
