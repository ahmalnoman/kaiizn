"use client";

import { useCallback, useEffect, useRef } from "react";

const useTypewriting = (texts: string[]) => {
  const ref = useRef<HTMLElement>(null);

  const typeWriter = useCallback(
    (textIndex = 0, charIndex = 0, isDeleting = false) => {
      if (!ref.current) return;

      const currentText = texts[textIndex];
      const transitionSpeed = isDeleting ? 100 : 200; //faster deletion, slower typing

      ref.current.textContent = currentText.substring(0, charIndex);

      if (!isDeleting) {
        charIndex++;
        if (charIndex > currentText.length) {
          isDeleting = true;
          setTimeout(() => typeWriter(textIndex, charIndex, isDeleting), 1000);
          return;
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      setTimeout(
        () => typeWriter(textIndex, charIndex, isDeleting),
        transitionSpeed,
      );
    },
    [texts],
  );

  useEffect(() => {
    typeWriter();
  }, [typeWriter]);

  return { ref };
};

export default useTypewriting;
