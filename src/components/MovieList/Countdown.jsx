import { useTimer } from 'react-timer-hook';

const Countdown = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
  });

  return (
    <div className="absolute top-2 w-full text-center font-bold">
      <div className="text-2xl uppercase font-bold">
        {days} Day{(days % 10 !== 1 || days === 11) && 's'}{' '}
        {('00' + hours).slice(-2)}:{('00' + minutes).slice(-2)}:
        {('00' + seconds).slice(-2)}
      </div>
      {days < 30 && (
        <span className="animate-pulse text-rose-600">
          {isRunning ? 'Coming soon!' : 'Just premiered!'}
        </span>
      )}
    </div>
  );
};

export default Countdown;
