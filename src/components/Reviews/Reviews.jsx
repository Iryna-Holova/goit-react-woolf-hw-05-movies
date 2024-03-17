import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from 'api/movies';
import { scroll } from 'helpers';
import ReviewCard from 'components/Reviews/ReviewCard';
import Pagination from 'components/Shared/Pagination';
import ReviewsLoader from './ReviewsLoader';
import Message from 'components/Shared/Message';

const Reviews = ({ tabsRef }) => {
  const [reviews, setReviews] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setError('');
        setLoading(true);
        const { results, total_pages } = await moviesApi.getMovieReviews(
          movieId,
          {
            page,
          }
        );
        if (!results.length) {
          setError('No reviews for this movie');
        } else {
          setReviews(results);
          setTotalPages(total_pages);
          scroll.scrollToElementTop(tabsRef.current);
        }
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId, page, tabsRef]);

  const handlePageChange = page => {
    setPage(page);
  };

  return (
    <>
      {reviews ? (
        <div className="flex flex-col gap-y-6">
          <ul className={loading ? 'animate-pulse pointer-events-none' : ''}>
            {reviews.map(({ id, ...props }) => (
              <ReviewCard key={id} {...props} />
            ))}
          </ul>
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              activePage={page}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : loading ? (
        <ReviewsLoader />
      ) : (
        error && <Message text={error} />
      )}
    </>
  );
};

export default Reviews;
