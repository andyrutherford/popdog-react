import { useEffect, useState } from 'react';

function useSticky() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > 0 ? setSticky(true) : setSticky(false);
  };

  // This function handle the scroll performance issue
  const debounce = (func, wait = 5, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  window.addEventListener('scroll', debounce(handleScroll));

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return { isSticky };
}

export default useSticky;
