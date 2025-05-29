import React from 'react';
import AnimatedSection from './sections/AnimatedSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import LanguagesSection from './sections/LanguagesSection';

interface MainContentProps {
  sidebarIsOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ sidebarIsOpen }) => (
  <div
    className={`transition-all duration-300 ease-in-out p-5 mx-auto ${
      sidebarIsOpen
        ? 'transform translate-x-[5%] md:translate-x-0 md:ml-[250px] md:mr-[50px] md:max-w-[calc(100%-300px)]'
        : ''
    }`}
  >
    <section id="about" className="mb-10">
      <AnimatedSection />
    </section>
    <section id="projects" className="mb-10">
      <ProjectsSection />
    </section>
    <section id="skills" className="mb-10">
      <SkillsSection />
    </section>
    <section id="experience" className="mb-10">
      <ExperienceSection />
    </section>
    <section id="education" className="mb-10">
      <EducationSection />
    </section>
    <section id="certifications" className="mb-10">
      <CertificationsSection />
    </section>
    <section id="languages" className="mb-10">
      <LanguagesSection />
    </section>
  </div>
);

export default MainContent;
