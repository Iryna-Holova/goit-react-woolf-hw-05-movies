import MovieCard from 'components/MovieList/MovieCard';

const MovieList = ({ items, isLoading }) => {
  return (
    <ul
      className={
        'grid grid-cols-1 justify-items-center gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 2xl:gap-x-8 2xl:gap-y-12 ' +
        (isLoading && 'animate-pulse pointer-events-none')
      }
    >
      {items.map(item => (
        <MovieCard key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
