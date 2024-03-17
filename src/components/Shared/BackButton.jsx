const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 top-0 p-4 transition-opacity opacity-50 hover:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
      <span className="absolute bottom-4 left-2">back</span>
    </button>
  );
};

export default BackButton;
