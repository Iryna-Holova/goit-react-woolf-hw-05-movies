import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as moviesApi from 'api/movies';
import { scroll } from 'helpers';
import MovieList from 'components/MovieList/MovieList';
import Pagination from 'components/Shared/Pagination';
import Message from 'components/Shared/Message';
import Loader from 'components/Shared/Loader';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError('');
        const { movies, total_pages } = await moviesApi.getTrendingMovies({
          page,
        });
        setMovies(movies);
        setTotalPages(total_pages);
      } catch (error) {
        setError('Something went wrong...');
        setMovies(null);
      } finally {
        setLoading(false);
      }
    };
    scroll.scrollToTop();
    getMovies();
  }, [page]);

  const handlePageChange = page => {
    setSearchParams({ page });
  };

  return (
    <main className="container grow flex flex-col mt-16 py-12 gap-y-8">
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

export default HomePage;
