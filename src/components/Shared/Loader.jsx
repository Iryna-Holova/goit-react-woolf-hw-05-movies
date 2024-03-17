const Loader = () => {
  return (
    <div className="grow flex flex-row items-center justify-center gap-2">
      <span className="sr-only">Loading...</span>
      <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default Loader;
