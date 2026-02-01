import React from 'react';
import ProjectsSection from './sections/ProjectsSection';
import AboutMe from '../components/AboutMe';

interface MainContentProps {
  sidebarIsOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ sidebarIsOpen }) => (
  <div
    className={`transition-all duration-700 ease-in-out px-8 py-16 mx-auto text-white ${
      sidebarIsOpen
        ? 'transform translate-x-[5%] md:translate-x-0 md:ml-[288px] md:mr-[72px] md:max-w-[calc(100%-360px)]'
        : ''
    }`}
  >
    <section id="about" className="mb-32">
      <AboutMe />
    </section>

    <section id="projects" className="mb-32">
      <ProjectsSection />
    </section>

    <section id="contacts" className="mb-32">
      {/* TODO: Add contacts content */}
    </section>
  </div>
);

export default MainContent;
