import { useEffect, useRef, useState } from 'react';
import { formatData, scroll } from 'helpers';

const ReviewCard = ({
  id,
  author,
  author_details: { avatar_path },
  content,
  created_at,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const reviewCard = useRef(null);
  const reviewContent = useRef(null);

  useEffect(() => {
    const review = reviewContent.current;
    if (review.offsetHeight > 140) {
      setIsCollapsed(true);
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    scroll.scrollToElementTop(reviewCard.current);
  };

  return (
    <li
      key={id}
      ref={reviewCard}
      className="relative flex flex-col sm:flex-row sm:gap-4 bg-gray-700 p-4 mb-8 last:mb-0 rounded-xl text-lg group"
    >
      {avatar_path ? (
        <div className="shrink-0 size-[100px] mx-auto mb-2 bg-gray-800 rounded-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w300${avatar_path}`}
            alt="User avatar"
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <svg
          className="shrink-0 size-[100px] mx-auto mb-2 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      )}

      <div className="flex-grow flex flex-col gap-y-4">
        <div className="flex flex-col items-center sm:flex-row justify-between">
          <h3 className="font-bold">{author}</h3>
          <span className="text-white/50">
            {formatData.formatDate(created_at)}
          </span>
        </div>
        <p
          ref={reviewContent}
          className={
            !isCollapsed
              ? 'text-white/80 hyphens-auto '
              : 'text-white/80 overflow-hidden hyphens-auto ' +
                (isOpen
                  ? 'transition-[max-height] duration-500 ease-out-expo max-h-[3000px]'
                  : 'max-h-[140px]')
          }
        >
          {content}
        </p>
      </div>
      {isCollapsed &&
        (!isOpen ? (
          <button
            onClick={handleToggle}
            className="absolute bottom-0 left-0 w-full h-20 pt-6 rounded-xl bg-gradient-to-t from-gray-700 via-gray-700 to-transparent pointer"
            type="button"
          >
            <span className="text-base font-bold group-hover:animate-pulse">
              See more...
            </span>
          </button>
        ) : (
          <button
            onClick={handleToggle}
            className="bg-gray-600/50 absolute -bottom-6 translate-x-1/2 right-1/2 p-4 rounded-full transition-colors hover:bg-gray-600/80"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        ))}
    </li>
  );
};

export default ReviewCard;
