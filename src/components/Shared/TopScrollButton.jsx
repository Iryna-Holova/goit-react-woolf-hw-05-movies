import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import { scroll } from 'helpers';

const TopScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const toTopButton = useRef(null);

  useEffect(() => {
    const handleButtonVisibility = () => {
      const scrollThreshold = window.innerHeight * 0.75;
      window.scrollY > scrollThreshold
        ? setShowButton(true)
        : setShowButton(false);
    };

    const throttledScrollHandler = throttle(handleButtonVisibility, 200);
    const scrollHandler = () => {
      window.requestAnimationFrame(throttledScrollHandler);
    };
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      throttledScrollHandler.cancel();
    };
  }, []);

  return (
    showButton && (
      <button
        ref={toTopButton}
        onClick={scroll.scrollToTop}
        type="button"
        title="Go To Top"
        aria-label="Go to top"
        className="fixed z-15 bottom-8 right-4 p-4 text-gray-400 rounded-full border-4 border-solid border-gray-400 bg-gray-950 opacity-50 transition-opacity hover:opacity-100 animate-[back-in-right_300ms_ease-out]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    )
  );
};

export default TopScrollButton;
