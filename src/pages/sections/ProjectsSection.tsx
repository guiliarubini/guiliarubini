import React, { useState } from 'react';
import { Project } from './data/types';
import { newYorkerProject } from './data/newYorkerData';
import { fashionShowProject } from './data/fashionShowData';
import { specialFashionCollectionProject } from './data/specialFashionCollectionData';

const projects: Project[] = [newYorkerProject, fashionShowProject, specialFashionCollectionProject];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setSelectedSubcategory(null);
    setSelectedFilter('All');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setSelectedSubcategory(null);
    setSelectedFilter('All');
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName);
  };

  const handleFilterClick = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  const currentProject = projects.find((p) => p.id === selectedProject);
  
  // Flatten all items from all subcategories with category info
  const allProjectItems = currentProject?.subcategories
    ? currentProject.subcategories.flatMap((sub) => 
        sub.items.map(item => ({ ...item, category: sub.name }))
      )
    : currentProject?.items?.map(item => ({ ...item, category: null })) || [];

  // Filter items based on selected filter
  const filteredItems = selectedFilter === 'All' 
    ? allProjectItems 
    : allProjectItems.filter(item => item.category === selectedFilter);

  return (
    <div className="py-12 md:py-20 px-6 md:px-8">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 md:mb-24 text-center text-white tracking-editorial">Projects</h2>

      {/* Landing View - Scrollable Project Cards */}
      {!selectedProject && (
        <div className="space-y-16 md:space-y-32 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                {/* Image Placeholder */}
                <div className="w-3/4 mx-auto md:mx-0 md:w-2/5 flex items-center justify-center group-hover:opacity-90 transition-all duration-700">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 space-y-4 md:space-y-6 font-sans">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white group-hover:text-white/70 transition-all duration-700 tracking-editorial">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/60 leading-loose font-light">
                    {project.description}
                  </p>
                  {project.subcategories && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.subcategories.map((sub) => (
                        <span
                          key={sub.name}
                          className="px-4 py-2 text-xs uppercase tracking-luxury bg-transparent text-white/40 border border-white/10 font-light"
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-3 text-white/40 text-xs uppercase tracking-luxury group-hover:text-white group-hover:gap-5 transition-all duration-700 font-light">
                      View Project <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail View */}
      {selectedProject && currentProject && (
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToProjects}
            className="mb-12 text-white/40 hover:text-white transition-all duration-700 flex items-center gap-3 text-xs uppercase tracking-luxury font-sans font-light"
          >
            <span>←</span> Back to Projects
          </button>

          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 md:mb-16 tracking-editorial">{currentProject.title}</h3>

          {/* Categories/Tags Display */}
          {currentProject.subcategories && (
            <div className="mb-20">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleFilterClick('All')}
                  className={`px-6 py-3 text-xs uppercase tracking-luxury border transition-all duration-700 font-sans ${
                    selectedFilter === 'All'
                      ? 'bg-white text-black border-white font-medium'
                      : 'bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30 font-light'
                  }`}
                >
                  All
                </button>
                {currentProject.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.name}
                    onClick={() => handleFilterClick(subcategory.name)}
                    className={`px-6 py-3 text-xs uppercase tracking-luxury border transition-all duration-700 font-sans ${
                      selectedFilter === subcategory.name
                        ? 'bg-white text-black border-white font-medium'
                        : 'bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30 font-light'
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Alternating Image + Description Layout */}
          <div className="space-y-16 md:space-y-32">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-3/4 mx-auto md:mx-0 md:w-1/2 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Description */}
                <div className="w-full md:w-1/2">
                  <p className="text-base md:text-lg text-white/60 leading-loose font-sans font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
