import React from 'react';
import ProjectsSection from './sections/ProjectsSection';
import AboutMe from '../components/AboutMe';

interface MainContentProps {
  sidebarIsOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ sidebarIsOpen }) => (
  <div
    className={`transition-all duration-300 ease-in-out p-5 mx-auto text-white ${
      sidebarIsOpen
        ? 'transform translate-x-[5%] md:translate-x-0 md:ml-[250px] md:mr-[50px] md:max-w-[calc(100%-300px)]'
        : ''
    }`}
  >
    <section id="about" className="mb-10">
      <AboutMe />
    </section>

    <section id="projects" className="mb-10">
      <ProjectsSection />
    </section>

    <section id="contacts" className="mb-10">
      {/* TODO: Add contacts content */}
    </section>
  </div>
);

export default MainContent;
