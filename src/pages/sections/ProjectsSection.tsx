import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { FaGithub } from 'react-icons/fa';

// Import Images
import riskAssesmentImage from '../../assets/risk-assesment.png';
import laneRecognitionImage from '../../assets/lane-recognition.png';
import historicalDataProcessingImage from '../../assets/pet-project-2.jpg';
import osciImage from '../../assets/osci.png';
import tinyURLImage from '../../assets/tiny-url.png';
import carModelClassificationImage from '../../assets/car-model-classification.png';
import inProgressImage from '../../assets/in-progress.jpg';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  borderColor: string;
  tags: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Fraud Risk Assessment Streaming ETL',
    imageUrl: riskAssesmentImage,
    borderColor: '#007bff',
    tags: ['Kafka', 'Azure', 'Databricks', 'Snowflake', 'Python', 'Spark Streaming'],
    githubLink: 'https://github.com/BondaiKa/fraud-risk-assesment-streaming-etl',
  },
  {
    id: 2,
    title: 'Lane Line Recognition System',
    imageUrl: laneRecognitionImage,
    borderColor: '#28a745',
    tags: ['Python', 'TensorFlow', 'Pandas', 'OpenCV'],
    githubLink: 'https://github.com/BondaiKa/lane_line_recognition',
  },
  {
    id: 3,
    title: 'Historical Data Processing with PySpark',
    imageUrl: historicalDataProcessingImage,
    borderColor: '#dc3545',
    tags: ['PySpark', 'Python', 'Data Processing', 'Docker', 'HDFS'],
    githubLink: 'https://github.com/BondaiKa/data_engineer_pet_project_2',
  },
  {
    id: 4,
    title: 'Open Source Contributor Index (OSCI)',
    imageUrl: osciImage,
    borderColor: '#ffc107',
    tags: ['Open Source', 'Python', 'Azure', 'Azure Data Factory', 'Azure Functions', 'BigQuery', 'Google Data Studio', 'Databricks'],
    githubLink: 'https://github.com/epam/OSCI',
  },
  {
    id: 5,
    title: 'Tiny URL Service',
    imageUrl: tinyURLImage,
    borderColor: '#17a2b8',
    tags: ['Backend', 'Flask', 'Redis', 'Docker', 'Python'],
    githubLink: 'https://github.com/BondaiKa/tinyurl',
  },
  {
    id: 6,
    title: 'Car Model Classification with TensorFlow',
    imageUrl: carModelClassificationImage,
    borderColor: '#6f42c1',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Image Classification'],
    githubLink: 'https://github.com/BondaiKa/Car-Model-Classification',
  },
  {
    id: 7,
    title: 'Coming Soon 🚧',
    imageUrl: inProgressImage,
    borderColor: 'yellow',
    tags: [],
    githubLink: '',
  },
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const getScale = (offset: number) => {
    if (offset === 0) return 0.95;
    if (Math.abs(offset) === 1) return 0.75;
    if (Math.abs(offset) === 2) return 0.6;
    if (Math.abs(offset) === 3) return 0.48;
    return 0.3;
  };

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartXRef.current;

      if (deltaX > 50) {
        handlePrevClick();
        touchStartXRef.current = null;
      } else if (deltaX < -50) {
        handleNextClick();
        touchStartXRef.current = null;
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
  };

  const handleProjectClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Add touch event listeners
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="projects" className="mb-10">
      <div className="relative flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Projects</h2>
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrevClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg z-50"
          >
            &lt;
          </button>

          {/* Carousel */}
          <div className="flex w-full overflow-hidden justify-center relative h-[500px]">
            {projects.map((project, index) => {
              let offset = index - currentIndex;
              if (offset < -Math.floor(projects.length / 2)) {
                offset += projects.length;
              }
              if (offset > Math.floor(projects.length / 2)) {
                offset -= projects.length;
              }

              // Ensure all visible cards are clickable
              const scale = getScale(offset);
              const zIndex = 10 - Math.abs(offset); // Give higher zIndex to cards closer to the center

              return (
                <div
                  key={project.id}
                  className="absolute transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] flex flex-col items-center justify-center"
                  style={{
                    transform: `translateX(${offset * 220}px) scale(${scale})`,
                    opacity: 1,
                    zIndex: zIndex,
                    cursor: 'pointer', // All cards should be clickable
                  }}
                  onClick={() => handleProjectClick(index)} // Click event to move carousel
                >
                  <div
                    className={classNames(
                      'bg-white rounded-lg shadow-md p-5 text-center transition-transform duration-300 ease-in-out border-b-4 m-2 flex-shrink-0 project-card relative',
                      'w-80', // Use width settings based on screen size
                      'md:w-140',
                      'h-[500px]',
                      'hover:-translate-y-2 hover:shadow-xl' // Ensure all cards have hover effects
                    )}
                    style={{
                      borderBottomColor: project.borderColor,
                      boxSizing: 'border-box',
                    }}
                  >
                    <h3 className="font-bold mb-3 text-gray-800 text-lg md:text-xl">
                      {project.title}
                    </h3>
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full max-w-full object-contain mb-3 mx-auto"
                        style={{ maxHeight: '250px' }}
                      />
                    )}
                    <div className="flex flex-wrap justify-center mt-3 tags-section">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 m-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold py-2 px-10 rounded-full transition duration-300 ease-in-out hover:bg-gray-100 shadow-md border-2 border-gray-400 flex items-center justify-center whitespace-nowrap"
                      >
                        View on GitHub <FaGithub className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg z-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
