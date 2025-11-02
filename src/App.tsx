import React, { useState, useEffect, lazy, Suspense } from 'react';

const Sidebar = lazy(() => import('./components/Sidebar'));
const MainContent = lazy(() => import('./pages/MainContent'));

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 768);
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

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

  useEffect(() => {
    if (showIntro) {
      setDisplayedText('');
      setCurrentPhase(0);
      
      const texts = ['Giulia Rubini', 'Fashion Designer'];
      let fullText = '';
      let charIndex = 0;
      let phaseIndex = 0;
      let timeoutId: NodeJS.Timeout;
      
      const typeChar = () => {
        if (phaseIndex < texts.length) {
          if (charIndex < texts[phaseIndex].length) {
            fullText += texts[phaseIndex][charIndex];
            setDisplayedText(fullText);
            charIndex++;
            timeoutId = setTimeout(typeChar, 100);
          } else {
            phaseIndex++;
            setCurrentPhase(phaseIndex);
            if (phaseIndex < texts.length) {
              fullText += '\n';
              setDisplayedText(fullText);
              charIndex = 0;
              timeoutId = setTimeout(typeChar, 500);
            }
          }
        }
      };
      
      timeoutId = setTimeout(typeChar, 500);
      
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [showIntro]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const handleToggleSidebar = (): void => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  if (showIntro) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          cursor: 'pointer',
          flexDirection: 'column',
          fontFamily: '"Playfair Display", "Georgia", serif',
          fontWeight: '300',
          letterSpacing: '0.1em',
        }}
        onClick={() => setShowIntro(false)}
      >
        <div style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
          {displayedText}
          <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </div>
      </div>
    );
  }

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
