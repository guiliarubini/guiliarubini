import React, { useState, useEffect, lazy, Suspense } from 'react';

const Sidebar = lazy(() => import('./components/Sidebar'));
const MainContent = lazy(() => import('./pages/MainContent'));

const App: React.FC = () => {
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sidebar
        isOpen={isSidebarOpen}
        isMobile={isMobile}
        onToggleSidebar={handleToggleSidebar}
        onCloseSidebar={handleCloseSidebar}
      />
      <MainContent sidebarIsOpen={isSidebarOpen} />
    </Suspense>
  );
};

export default App;
