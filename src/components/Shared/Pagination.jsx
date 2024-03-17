const Pagination = ({ totalPages, activePage, onPageChange }) => {
  const createButtons = () => {
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 5) {
      if (activePage <= 3) {
        endPage = 5;
      } else if (activePage >= totalPages - 2) {
        startPage = totalPages - 4;
      } else {
        startPage = activePage - 2;
        endPage = activePage + 2;
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const buttons = createButtons();
  const prevPage = activePage === 1 ? false : activePage - 1;
  const nextPage = activePage === totalPages ? false : activePage + 1;

  return (
    <div className="flex flex-wrap justify-center gap-1 sm:justify-between">
      <div className="w-full flex gap-x-2 justify-center sm:w-auto">
        {buttons.map(button => (
          <button
            key={button}
            disabled={button === activePage}
            className="relative h-10 w-10 select-none rounded-lg text-xs font-medium transition-colors hover:bg-gray-700 focus:bg-gray-700 disabled:bg-gray-900 disabled:pointer-events-none"
            type="button"
            onClick={() => onPageChange(button)}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {button}
            </span>
          </button>
        ))}
      </div>
      <button
        disabled={Boolean(!prevPage)}
        className="flex gap-x-2 px-6 py-3 text-xs font-bold uppercase transition-colors rounded-lg select-none hover:bg-gray-700 disabled:pointer-events-none disabled:opacity-50 sm:-order-1"
        type="button"
        onClick={() => onPageChange(prevPage)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
        Previous
      </button>
      <button
        disabled={Boolean(!nextPage)}
        className="flex gap-x-2 px-6 py-3 text-xs font-bold uppercase transition-colors rounded-lg select-none hover:bg-gray-700 disabled:pointer-events-none disabled:opacity-50"
        type="button"
        onClick={() => onPageChange(nextPage)}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
