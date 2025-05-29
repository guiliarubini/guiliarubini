import React, { KeyboardEvent } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFilePdf,
} from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import resumeFile from '../assets/resume.pdf';

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
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
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
          className="w-full py-2 text-center text-gray-800 bg-white hover:text-blue-500 transition-colors duration-300 rounded shadow"
        >
          {item.label}
        </button>
      </li>
    ));

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <div
          className="fixed top-4 left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-2xl text-gray-800 cursor-pointer z-50 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={onToggleSidebar}
          role="button"
          tabIndex={0}
          onKeyDown={handleHamburgerKeyDown}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg p-5 flex flex-col items-center transform transition-transform duration-300 z-40 ${
          isOpen || !isMobile ? 'translate-x-0' : '-translate-x-full'
        } ${isMobile ? 'w-2/5' : 'w-64'}`}
      >
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Karim Safiullin"
          className="w-32 h-32 rounded-full object-cover mb-5"
        />
        <h1 className="text-2xl font-semibold text-center">Karim Safiullin</h1>
        <p className="mt-2 mb-5 text-gray-600 text-center">
          Senior Data Engineer
        </p>

        {/* Contact Icons */}
        <div className="flex mb-5 justify-center">
          <a
            href="mailto:karim.safiullin.career@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/BondaiKa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/karim-safiullin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2"
            aria-label="Resume"
          >
            <FaFilePdf size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="w-full">
          <ul className="flex flex-col items-center list-none">
            {renderNavItems()}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="mt-auto text-gray-400 text-center">
          <p>© 2024 Karim Safiullin</p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
