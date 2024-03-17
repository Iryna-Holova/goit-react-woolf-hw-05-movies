import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as moviesApi from 'api/movies';
import { scroll } from 'helpers';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Pagination from 'components/Shared/Pagination';
import Message from 'components/Shared/Message';
import Loader from 'components/Shared/Loader';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        setError('');
        const { results, total_pages } = await moviesApi.searchMovies({
          query,
          page,
        });
        if (results.length === 0) {
          setError('Nothing found...');
          setMovies(null);
        } else {
          setMovies(results);
          setTotalPages(total_pages);
        }
      } catch (error) {
        setError('Something went wrong...');
        setMovies(null);
      } finally {
        setLoading(false);
      }
    };
    scroll.scrollToTop();
    getMovies();
  }, [query, page]);

  const handleFormSubmit = query => setSearchParams({ query });

  const handlePageChange = page => {
    setSearchParams({ query, page });
  };

  return (
    <main className="container grow flex flex-col mt-16 py-12 gap-y-8">
      <SearchForm onFormSubmit={handleFormSubmit} isLoading={loading} />
      {movies ? (
        <>
          <MovieList items={movies} isLoading={loading} />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              activePage={page}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : loading ? (
        <Loader />
      ) : (
        error && <Message text={error} />
      )}
    </main>
  );
};

export default MoviesPage;
