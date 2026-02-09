import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
  isExiting: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete, isExiting }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');

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
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        onComplete();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [onComplete]);

  return (
    <div
      className="intro-screen-container"
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: isExiting ? '120px' : '100vh',
        display: 'flex',
        alignItems: isExiting ? 'center' : 'center',
        justifyContent: 'center',
        cursor: isExiting ? 'default' : 'pointer',
        flexDirection: 'column',
        fontFamily: '"Bebas Neue", sans-serif',
        letterSpacing: '0.1em',
        position: 'relative',
        zIndex: isExiting ? 1 : 1000,
        paddingTop: isExiting ? '1.5rem' : '0',
        paddingBottom: isExiting ? '1.5rem' : '0',
        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onClick={!isExiting ? onComplete : undefined}
    >
      <div className="text-center px-4">
        <div
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {displayedText.split('\n')[0]}
          {displayedText.split('\n').length === 1 && (
            <span style={{ opacity: showCursor && !isExiting ? 1 : 0, transition: 'opacity 0.3s' }}>|</span>
          )}
        </div>
        <div
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl break-words mt-2 sm:mt-4 md:mt-6 lg:mt-8"
          style={{
            opacity: isExiting ? 0 : 1,
            maxHeight: isExiting ? '0' : '200px',
            overflow: 'hidden',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            marginTop: isExiting ? '0' : undefined,
          }}
        >
          {displayedText.split('\n')[1]}
          {displayedText.split('\n').length > 1 && (
            <span style={{ opacity: showCursor && !isExiting ? 1 : 0, transition: 'opacity 0.3s' }}>|</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
