import { Link, useLocation } from 'react-router-dom';
import Countdown from 'components/MovieList/Countdown';
import noImage from '../../images/no-image-movie.png';

const MovieCard = ({
  id,
  poster_path,
  title,
  genres,
  popularity,
  release_date,
  vote_average,
  vote_count,
  overview,
}) => {
  const location = useLocation();
  const movieDate = new Date(release_date);
  const daysDiff = (new Date() - movieDate) / (1000 * 3600 * 24);

  return (
    <li className="movie-card max-w-full w-96 animate-[fade-in_300ms_ease-out]">
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className="block relative bg-gray-950 cursor-pointer overflow-hidden rounded-xl hover:-translate-y-2 transition-transform ease-in-out duration-500"
      >
        <div className="relative aspect-[2/3]">
          <img
            className="max-w-full aspect-[2/3] object-cover"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : noImage
            }
            alt="poster"
            width={500}
            height={750}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-gray-950/20"></div>
          <div className="title px-4 py-2 absolute w-full bottom-0 ">
            <p className="text-md text-gray-400 truncate">{genres}</p>
            <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          </div>
        </div>
        <div className="movie_info px-4 pb-4 space-y-1">
          <div className="stats gap-x-1 flex flex-row justify-between overflow-hidden">
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-400">Year:</h4>
              <div>{release_date ? release_date.slice(0, 4) : '-'}</div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-400">Rating:</h4>
              <div>{vote_average ? vote_average.toFixed(1) : '-'}</div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-400">Votes:</h4>
              <div>{vote_count ? vote_count.toLocaleString('en-US') : '-'}</div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-400">Popularity:</h4>
              <div>{popularity.toFixed(0).toLocaleString('en-US')}</div>
            </div>
          </div>
          <div className="overview flex flex-col">
            <h4 className="text-xs text-gray-400">Overview:</h4>
            <p className="text-gray-100 h-12 line-clamp-2">
              {overview ? overview : '-'}
            </p>
          </div>
        </div>
        {daysDiff < 0 ? (
          <Countdown expiryTimestamp={movieDate} />
        ) : (
          daysDiff < 30 && (
            <div className="absolute top-2 w-full text-center text-2xl font-bold animate-pulse text-rose-600">
              New release!
            </div>
          )
        )}
      </Link>
    </li>
  );
};

export default MovieCard;
