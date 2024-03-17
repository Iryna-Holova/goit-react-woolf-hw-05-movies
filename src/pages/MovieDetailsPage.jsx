import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Tabs from 'components/MovieDetails/Tabs';
import BackButton from 'components/Shared/BackButton';
import Loader from 'components/Shared/Loader';
import Message from 'components/Shared/Message';

const tabs = ['cast', 'reviews'];

const MovieDetailsPage = ({ tabsRef }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      try {
        setLoading(true);
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  const handleBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <main className="grow flex flex-col">
      <div className="container relative top-12">
        <BackButton onClick={handleBack} />
      </div>
      {movie ? (
        <>
          <MovieDetails {...movie}>
            <Tabs tabs={tabs} tabsRef={tabsRef} />
          </MovieDetails>
          <div className="min-h-72 flex flex-col container pt-8 pb-12">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      ) : loading ? (
        <Loader />
      ) : (
        error && <Message text={error} />
      )}
    </main>
  );
};

export default MovieDetailsPage;
