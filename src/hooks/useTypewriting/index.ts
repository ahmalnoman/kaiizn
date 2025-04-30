"use client";

import { useCallback, useEffect, useRef } from "react";

const useTypewriting = (texts: string[]) => {
  const ref = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const typeWriter = useCallback(
    (textIndex = 0, charIndex = 0, isDeleting = false) => {
      if (!ref.current) return;

      const currentText = texts[textIndex];
      const transitionSpeed = isDeleting ? 100 : 200;

      ref.current.textContent = currentText.substring(0, charIndex);

      if (!isDeleting) {
        charIndex++;
        if (charIndex > currentText.length) {
          isDeleting = true;
          timeoutRef.current = setTimeout(() => typeWriter(textIndex, charIndex, isDeleting), 1000);
          return;
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      
      timeoutRef.current = setTimeout(
        () => typeWriter(textIndex, charIndex, isDeleting),
        transitionSpeed,
      );
    },
    [texts],
  );

  useEffect(() => {
    typeWriter();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typeWriter]);

  return { ref };
};

export default useTypewriting;
