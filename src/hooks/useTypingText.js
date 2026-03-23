import { useEffect, useState } from 'react';

export function useTypingText(words, speed = 75, pause = 1400) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = word.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === word) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        const next = word.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (!next) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting, pause, speed, words]);

  return displayText;
}
