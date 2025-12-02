import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

interface UseTypewriterReturn {
  displayedText: string;
  isDeleting: boolean;
}

export const useTypewriter = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: UseTypewriterProps): UseTypewriterReturn => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          timer = setTimeout(type, typingSpeed);
        } else {
          // Word is complete, wait then start deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
          timer = setTimeout(type, deletingSpeed);
        } else {
          // Word is deleted, move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(type, typingSpeed);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [displayedText, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return { displayedText, isDeleting };
};
