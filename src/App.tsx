import React, { useState, useEffect, lazy, Suspense } from 'react';
import IntroScreen from './components/IntroScreen';

const Sidebar = lazy(() => import('./components/Sidebar'));
const MainContent = lazy(() => import('./pages/MainContent'));

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = (): void => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      if (isMobile && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isSidebarOpen]);

  const handleToggleSidebar = (): void => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  const handleIntroComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} isExiting={isExiting} />;
  }

  return (
    <div
      style={{
        transform: isExiting ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          onToggleSidebar={handleToggleSidebar}
          onCloseSidebar={handleCloseSidebar}
        />
        <MainContent sidebarIsOpen={isSidebarOpen} />
      </Suspense>
    </div>
  );
};

export default App;
