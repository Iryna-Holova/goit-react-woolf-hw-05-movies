import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onFormSubmit, isLoading }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );

  const handleChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!searchQuery.trim()) return;
    onFormSubmit(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-gray-300 w-full flex flex-col sm:flex-row py-2 px-2 gap-2 shadow-xl shadow-gray-900 rounded-xl"
    >
      <input
        onChange={handleChange}
        name="query"
        value={searchQuery}
        placeholder="Enter movie title..."
        className="p-2 w-full flex-1 bg-transparent rounded-md text-xl text-gray-950 text-center placeholder:text-gray-600 sm:text-start outline-none border-2 border-transparent transition-colors focus:border-gray-900"
      />
      <button
        disabled={isLoading}
        className="w-full px-6 py-3 bg-gray-950 border-none rounded-md sm:w-auto will-change-transform transition-transform active:scale-[0.98] hover:scale-[1.02] disabled:opacity-70"
      >
        <span className="font-semibold whitespace-nowrap truncate mx-auto">
          Search
        </span>
      </button>
    </form>
  );
};

export default SearchForm;
