import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 70,
  deleteSpeed = 50,
  pauseTime = 2000
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      // Pause before deleting or retyping
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (displayedText === text) {
          setIsDeleting(true);
        }
      }, pauseTime);
    } else if (isDeleting) {
      // Delete text
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting, start typing again
        setIsDeleting(false);
        setIsPaused(true);
      }
    } else {
      // Type text
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, text, speed, deleteSpeed, pauseTime]);

  // Reset when text prop changes (e.g., language change)
  useEffect(() => {
    setDisplayedText('');
    setIsDeleting(false);
    setIsPaused(false);
  }, [text]);

  return (
    <span className="typing-effect">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingEffect;
