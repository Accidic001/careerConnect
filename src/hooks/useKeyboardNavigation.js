import { useEffect, useRef } from 'react';

export const useKeyboardNavigation = (itemCount) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!containerRef.current) return;

      const focusableElements = containerRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          focusableElements[nextIndex]?.focus();
          break;

        case 'ArrowUp':
          event.preventDefault();
          const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
          focusableElements[prevIndex]?.focus();
          break;

        case 'Home':
          event.preventDefault();
          focusableElements[0]?.focus();
          break;

        case 'End':
          event.preventDefault();
          focusableElements[focusableElements.length - 1]?.focus();
          break;

        default:
          break;
      }
    };

    const container = containerRef.current;
    container?.addEventListener('keydown', handleKeyDown);

    return () => {
      container?.removeEventListener('keydown', handleKeyDown);
    };
  }, [itemCount]);

  return containerRef;
};