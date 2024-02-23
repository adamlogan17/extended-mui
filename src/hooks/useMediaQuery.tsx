import { useEffect, useState } from 'react';

/**
 * @function useMediaQuery
 * 
 * @author @adamlogan17
 * 
 * A custom hook that listens for changes in the viewport's width and height.
 * It returns a boolean value indicating whether the viewport matches the specified media query string.
 * 
 * @param {string} query - The media query string. This must be the same as it would be in a CSS file.
 * @returns {boolean} A boolean value indicating whether the viewport matches the specified media query string.
 */
const useMediaQuery = (query: string): boolean => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState<boolean>(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  }, [mediaMatch]);

  return matches;
};

export default useMediaQuery;