const RatingStars = ({ rating, votes }) => {
  return (
    <div className="flex items-center w-full">
      <div
        className="bg-[url('/src/images/star-empty.svg')] bg-[length:auto_100%] bg-repeat-x w-full aspect-[293/28]"
        aria-label={`Rating is ${rating} out of 10`}
      >
        <div
          style={{ width: `${rating * 10}%` }}
          className="bg-[url('/src/images/star-full.svg')] bg-[length:auto_100%] bg-repeat-x h-full w-0"
        ></div>
      </div>
      <div className="hidden min-[375px]:block shrink-0 self-end text-white/70">
        <span className="inline-block text-4xl leading-none">/</span>
        <span className="text-nowrap leading-none">
          {votes.toLocaleString('en-US')} votes
        </span>
      </div>
    </div>
  );
};

export default RatingStars;
