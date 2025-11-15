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
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onClick={onComplete}
    >
      <div style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
        {displayedText}
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </div>
    </div>
  );
};

export default IntroScreen;
