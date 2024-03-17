const items = [1, 2, 3, 4, 5];

const ReviewsLoader = () => {
  return (
    <div role="status">
      <span className="sr-only">Loading...</span>
      {items.map(item => (
        <div
          key={item}
          className="animate-pulse flex flex-col sm:flex-row sm:gap-4 bg-gray-700 p-4 mb-8 last:mb-0 rounded-xl"
        >
          <svg
            className="shrink-0 size-[100px] text-gray-800 mx-auto mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div className="flex-grow flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3 items-center sm:flex-row justify-between">
              <div className="h-2.5 bg-gray-200 rounded-full w-40"></div>
              <div className="h-2.5 bg-gray-500 rounded-full w-36"></div>
            </div>
            <div>
              <div className="h-2 bg-gray-400 rounded-full w-11/12 mb-4"></div>
              <div className="h-2 bg-gray-400 rounded-full mb-4"></div>
              <div className="h-2 bg-gray-400 rounded-full mb-4"></div>
              <div className="h-2 bg-gray-400 rounded-full w-11/12 mb-4"></div>
              <div className="h-2 bg-gray-400 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsLoader;
