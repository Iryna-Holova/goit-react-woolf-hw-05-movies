import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from 'api/movies';
import { scroll } from 'helpers';
import Loader from 'components/Shared/Loader';
import Message from 'components/Shared/Message';
import noImage from '../../images/no-image-person.png';

const Cast = ({ tabsRef }) => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const getCast = async () => {
      try {
        const { cast } = await moviesApi.getMovieCast(movieId);
        if (!cast.length) {
          setError('Actors not available');
        } else {
          setCast(cast);
          scroll.scrollToElementTop(tabsRef.current);
        }
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId, tabsRef]);

  return (
    <>
      {cast ? (
        <ul className="grid place-items-center grid-cols-1 gap-4 items-center min-[375px]:grid-cols-2 sm:grid-cols-3 sm:gap-y-8 md:grid-cols-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-5 2xl:gap-x-8 2xl:gap-y-12">
          {cast.map(({ id, profile_path, name, character }) => (
            <li
              key={id}
              className="relative bg-gray-700/50 max-w-[300px] rounded-lg overflow-hidden border border-gray-700 transition-transform hover:scale-105"
            >
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : noImage
                }
                alt={name}
              />
              <div className="absolute bottom-0 w-full pt-8 pb-3 text-center bg-gradient-to-t from-black to-transparent">
                <h4 className="text-xl font-bold tracking-tight">{name}</h4>
                {character && <p className="text-gray-400">As {character}</p>}
              </div>
            </li>
          ))}
        </ul>
      ) : loading ? (
        <Loader />
      ) : (
        error && <Message text={error} />
      )}
    </>
  );
};

export default Cast;
