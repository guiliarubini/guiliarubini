import React, { useState } from 'react';
import newYorkerLogo from '../../assets/newyorker_logo.png';
import universityPreview from '../../assets/university_subcategory_image_family.png';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  subcategories?: string[];
}

const projects: Project[] = [
  {
    id: 'newyorker',
    title: 'New Yorker',
    description: 'Commercial fashion design projects for New Yorker brand',
    image: newYorkerLogo,
    subcategories: ['Jeans', 'Shorts', 'Sets', 'Prints'],
  },
  {
    id: 'fashionshow',
    title: 'Fashion Show / Podium',
    description: 'Runway and fashion show collections',
    image: null, // TODO: Replace with actual fashion show image
  },
  {
    id: 'university',
    title: 'University',
    description: 'Academic fashion design projects and thesis work',
    image: universityPreview,
    subcategories: ['Category 1', 'Category 2', 'Category 3'], // TODO: Add actual subcategory names
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setSelectedSubcategory(null);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const currentProject = projects.find((p) => p.id === selectedProject);

  return (
    <div className="py-10 px-5">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>

      {/* Landing View - Scrollable Project Cards */}
      {!selectedProject && (
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-white/80 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  {project.subcategories && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.subcategories.map((sub) => (
                        <span
                          key={sub}
                          className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full border border-white/20"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-white/60 group-hover:text-white group-hover:gap-4 transition-all duration-300">
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
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToProjects}
            className="mb-8 text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 text-lg"
          >
            <span>←</span> Back to Projects
          </button>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">{currentProject.title}</h3>

          {/* Subcategories (if any) */}
          {currentProject.subcategories && (
            <div className="mb-8">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {currentProject.subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                      selectedSubcategory === subcategory
                        ? 'bg-white text-black shadow-lg scale-105'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[500px]">
            {selectedSubcategory ? (
              <div>
                <h4 className="text-2xl font-semibold text-white mb-6">
                  {selectedSubcategory}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* TODO: Add images/content for each subcategory */}
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center text-white/30 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      Image {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : currentProject.subcategories ? (
              <div className="flex items-center justify-center h-full text-white/60 text-lg">
                Select a category above to view content
              </div>
            ) : (
              <div>
                <h4 className="text-2xl font-semibold text-white mb-6">
                  {currentProject.title} Gallery
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* TODO: Add fashion show images */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center text-white/30 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      Image {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
