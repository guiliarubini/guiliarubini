import React, { useState, useEffect, lazy, Suspense } from 'react';
import IntroScreen from './components/IntroScreen';

const Sidebar = lazy(() => import('./components/Sidebar'));
const MainContent = lazy(() => import('./pages/MainContent'));

const App: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = (): void => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
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
  };

  return (
    <>
      <IntroScreen onComplete={handleIntroComplete} isExiting={isExiting} />
      <div
        className="font-sans"
        style={{
          marginTop: isExiting ? '0' : '100vh',
          opacity: isExiting ? 1 : 0,
          transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: '#000000',
          minHeight: '100vh',
        }}
      >
        <Suspense fallback={<div className="flex items-center justify-center h-screen text-white/40 text-sm uppercase tracking-luxury">Loading...</div>}>
        <Sidebar
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          onToggleSidebar={handleToggleSidebar}
          onCloseSidebar={handleCloseSidebar}
        />
        <MainContent sidebarIsOpen={isSidebarOpen} />
      </Suspense>
      </div>
    </>
  );
};

export default App;
