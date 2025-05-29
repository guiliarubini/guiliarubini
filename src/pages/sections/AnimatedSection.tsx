import React, { useState, useEffect } from 'react';

const AnimatedSection = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full min-w-[300px] h-[300px] overflow-hidden text-center flex items-center justify-center bg-gray-100">
      {/* First Section */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[800ms] ease-in-out ${showFirst ? 'opacity-100 z-10 delay-[0ms]' : 'opacity-0 z-0 delay-[0ms]'
          }`}
      >
        <h1 className="text-4xl mb-2 text-gray-800">
          Hey guys <span role="img" aria-label="waving-hand">👋</span>! I am Karim
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Senior Data Engineer with 6 years of experience and a background in Computer Science.
        </p>
      </div>

      {/* Second Section */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[1000ms] ease-in-out ${!showFirst ? 'opacity-100 z-10 delay-[400ms]' : 'opacity-0 z-0 delay-[0ms]'
          }`}
      >
        <h1 className="text-4xl mb-2 text-gray-800">
          Data Expert <span role="img" aria-label="gear">⚙️</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Strong team player who develops and maintains large-scale infrastructure and implements complex data pipelines.
        </p>
      </div>
    </div>
  );
};

export default AnimatedSection;
