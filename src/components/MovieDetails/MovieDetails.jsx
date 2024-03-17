import { useState } from 'react';
import { formatData } from 'helpers';
import RatingStars from './RatingStars';
import VideoModal from './VideoModal';
import noImage from '../../images/no-image-movie.png';

const MovieDetails = ({
  backdrop_path,
  budget,
  credits,
  genres,
  homepage,
  original_language,
  overview,
  poster_path,
  production_companies,
  production_countries,
  release_date,
  revenue,
  runtime,
  tagline,
  title,
  videos,
  vote_average,
  vote_count,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const videoKey = videos.results.find(({ type }) => type === 'Trailer')?.key;
  const director = credits.crew
    .filter(({ job }) => job === 'Director')
    .map(({ name }) => name)
    .join(', ');

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
      }}
      className="bg-no-repeat bg-center bg-[length:auto_100%]"
    >
      <div className="bg-gray-950/75 lg:bg-transparent lg:bg-gradient-to-r from-gray-950 via-gray-950/65 to-gray-950">
        <div className="container pt-[72px] pb-4 flex flex-wrap justify-center gap-y-6 items-start sm:justify-between">
          <div className="logos flex flex-wrap gap-2 w-full justify-center">
            {production_companies.map(({ id, logo_path, name }) => (
              <div key={id} className="bg-white/90 h-9 py-1 px-4">
                {logo_path ? (
                  <img
                    className="h-full"
                    src={`https://image.tmdb.org/t/p/w300${logo_path}`}
                    alt={`${name}`}
                  />
                ) : (
                  <span className="flex items-center max-w-full h-full text-center text-gray-900 text-xs font-bold tracking-tighter uppercase leading-none">
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="title lg:w-5/12 lg:order-3">
            <h2 className="text-4xl font-bold tracking-tight">
              {release_date ? title + ` (${release_date.slice(0, 4)})` : title}
            </h2>
            {tagline && <p className="inline-block mt-1 italic">{tagline}</p>}
            <div className="info mt-4 text-white/70">
              {Boolean(runtime) && (
                <span>{formatData.formatTime(runtime)} | </span>
              )}
              {release_date && (
                <span>{formatData.formatDate(release_date)} | </span>
              )}
              <span>
                {production_countries
                  .map(({ name }) =>
                    name === 'United States of America' ? 'USA' : name
                  )
                  .join(', ')}
              </span>
            </div>
            <p className="mt-4">{overview}</p>
          </div>

          <div className="poster relative flex flex-col gap-y-4 sm:w-6/12 sm:order-4 lg:w-3/12">
            {Boolean(vote_average) && (
              <RatingStars rating={vote_average} votes={vote_count} />
            )}
            <img
              className="rounded-lg"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : noImage
              }
              alt={title}
            />
            {videoKey && (
              <button
                onClick={toggleModal}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-left-4 sm:translate-x-0 flex p-4 gap-2 items-center justify-end bg-rose-600 rounded-tl-xl rounded-br-xl overflow-hidden w-[72px] transition-[width] group hover:w-36"
                type="button"
              >
                <span className="text-2xl shrink opacity-0 transition-opacity group-hover:opacity-100">
                  Trailer
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="info flex flex-wrap w-full gap-x-6 gap-y-4 sm:flex-col sm:w-5/12 lg:w-3/12 lg:text-right">
            {genres.length !== 0 && (
              <div className="genres w-full">
                <h3 className="uppercase text-white/50 font-bold mb-2">
                  Genres
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-gray-900 lg:justify-end">
                  {genres.map(({ id, name }) => (
                    <li
                      key={id}
                      className="bg-white/90 rounded-full px-3 font-semibold"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="language">
              <h3 className="uppercase text-white/50 font-bold">Language</h3>
              <p className="text-xl">
                {formatData.formatLanguage(original_language)}
              </p>
            </div>
            {Boolean(budget) && (
              <div>
                <h3 className="uppercase text-white/50 font-bold">Budget</h3>
                <p className="text-xl">${budget.toLocaleString('en-US')}</p>
              </div>
            )}
            {Boolean(revenue) && (
              <div>
                <h3 className="uppercase text-white/50 font-bold">Income</h3>
                <p className="text-xl">${revenue.toLocaleString('en-US')}</p>
              </div>
            )}
            {homepage && (
              <div className="max-w-full">
                <h3 className="uppercase text-white/50 font-bold">Homepage</h3>
                <a
                  href={homepage}
                  target="_blanc"
                  className="text-xl underline break-words"
                >
                  {homepage.split('//')[1]}
                </a>
              </div>
            )}
            {director && (
              <div>
                <h3 className="uppercase text-white/50 font-bold">Director</h3>
                <p className="text-xl">{director}</p>
              </div>
            )}
          </div>

          {showModal && (
            <VideoModal videoKey={videoKey} onModalClose={toggleModal} />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default MovieDetails;
