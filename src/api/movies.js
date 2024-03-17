import axios from 'axios';

const themoviedb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {},
});

themoviedb.interceptors.request.use(config => {
  config.params = {
    api_key: '8b67a89c3b3cf87de76d1484537ca872',
    include_adult: false,
    language: 'en-US',
    ...config.params,
  };
  return config;
});

const getTrendingMovies = async params => {
  const {
    data: { results, total_pages },
  } = await themoviedb.get('trending/movie/day', {
    params,
  });

  const movies = await addGenres(results);
  return { movies, total_pages };
};

const searchMovies = async params => {
  const { data } = await themoviedb.get('search/movie', {
    params,
  });
  return data;
  // const search = await moviesApi.searchMovies({ query: 'titanic' });
  // console.log('search :>> ', search);
};

const getMovieDetails = async id => {
  const { data } = await themoviedb.get(`movie/${id}`, {
    params: { append_to_response: 'videos,credits' },
  });
  return data;
};

const getMovieCast = async id => {
  const { data } = await themoviedb.get(`movie/${id}/credits`);
  return data;
};

const getMovieReviews = async (id, params) => {
  const {
    data: { results, total_pages },
  } = await themoviedb.get(`movie/${id}/reviews`, { params });
  return { results, total_pages };
};

const getMovieGenres = async () => {
  const { data } = await themoviedb.get(`genre/movie/list`);
  return data.genres;
};

const addGenres = async movies => {
  let genres = JSON.parse(localStorage.getItem('genres'));
  if (!genres) {
    genres = await getMovieGenres();
    localStorage.setItem('genres', JSON.stringify(genres));
  }

  return movies.map(movie => ({
    ...movie,
    genres: movie.genre_ids
      .map(genreId => genres.find(({ id }) => id === genreId).name)
      .join(', '),
  }));
};

export {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMovieGenres,
};
